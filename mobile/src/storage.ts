import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";
import { STORAGE_KEY, type Persistence } from "@brew-core";

const RECOVERY_KEY = `${STORAGE_KEY}.pending-native`;
let nativeQueue: Promise<void> = Promise.resolve();

function serializeNative<T>(action: () => Promise<T>): Promise<T> {
  const result = nativeQueue.then(action);
  nativeQueue = result.then(() => undefined, () => undefined);
  return result;
}

function readRecovery(): string | null {
  try {
    const raw = window.localStorage.getItem(RECOVERY_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as { version?: unknown; value?: unknown };
    return saved?.version === 1 && typeof saved.value === "string" ? saved.value : null;
  } catch {
    return null;
  }
}

function saveRecovery(value: string) {
  try {
    window.localStorage.setItem(RECOVERY_KEY, JSON.stringify({ version: 1, value }));
  } catch {
    // If all durable stores reject writes, the active session remains usable.
  }
}

function clearRecovery(value: string) {
  try {
    // An older acknowledgement must not discard a newer pending snapshot.
    if (readRecovery() === value) window.localStorage.removeItem(RECOVERY_KEY);
  } catch {
    // Keeping a recovery copy is safer than discarding an unacknowledged save.
  }
}

export function createWebPersistence(): Persistence {
  return {
    load() {
      try {
        return window.localStorage.getItem(STORAGE_KEY);
      } catch {
        return null;
      }
    },
    save(value: string) {
      try {
        window.localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // Private-mode or quota failures must not crash a brewing session.
      }
    },
  };
}

export async function createAppPersistence(): Promise<Persistence> {
  const web = createWebPersistence();
  if (!Capacitor.isNativePlatform()) return web;

  const initial = await serializeNative(async () => {
    let stored: { value: string | null };
    try {
      stored = await Preferences.get({ key: STORAGE_KEY });
    } catch {
      return { cached: readRecovery() ?? web.load(), nativeAvailable: false };
    }
    // Only an explicit unacknowledged snapshot overrides established native
    // state. Legacy fallback/native precedence and the primary schema stay intact.
    const recovery = readRecovery();
    const cached = recovery ?? (stored.value || web.load());
    if (recovery !== null || (!stored.value && cached)) {
      try {
        await Preferences.set({ key: STORAGE_KEY, value: cached! });
        clearRecovery(cached!);
      } catch {
        // A rejected repair keeps the recovery snapshot available on reopening.
      }
    }
    return { cached, nativeAvailable: true };
  });
  let cached = initial.cached;

  return {
    load() {
      return cached;
    },
    save(value: string) {
      cached = value;
      saveRecovery(value);
      web.save(value);
      if (initial.nativeAvailable) {
        void serializeNative(async () => {
          await Preferences.set({ key: STORAGE_KEY, value });
          clearRecovery(value);
        }).catch(() => {
          // Retain fallback/recovery data without stopping the in-memory session.
        });
      }
    },
  };
}
