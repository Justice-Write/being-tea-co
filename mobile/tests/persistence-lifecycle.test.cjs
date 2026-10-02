const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require(process.env.BEING_TEA_TYPESCRIPT || 'typescript');
const KEY = 'being-tea-co.mobile.v1';
const tick = () => new Promise(resolve => setImmediate(resolve));
function compile(source) {
  return ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
}
function fixture({ native = true, webValue = null, nativeValue = null, failSet = false, failGet = false, defer = false, failWeb = false } = {}) {
  const web = new Map(webValue === null ? [] : [[KEY, webValue]]);
  const nativeStore = new Map(nativeValue === null ? [] : [[KEY, nativeValue]]);
  const writes = [];
  const options = { failSet, failGet, defer, failWeb, failuresLeft: 0 };
  const Preferences = {
    async get({ key }) { if (options.failGet) throw Error('Synthetic native read denied'); return { value: nativeStore.get(key) ?? null }; },
    set({ key, value }) {
      if (options.failSet || options.failuresLeft-- > 0) return Promise.reject(Error('Synthetic native write denied'));
      if (!options.defer) { nativeStore.set(key, value); return Promise.resolve(); }
      return new Promise(resolve => writes.push({ value, complete() { nativeStore.set(key, value); resolve(); } }));
    },
  };
  function reloadModule() {
    const exports = {};
    vm.runInNewContext(compile(fs.readFileSync(path.join(__dirname, '../src/storage.ts'), 'utf8')), {
      exports,
      require(name) {
        if (name === '@capacitor/core') return { Capacitor: { isNativePlatform: () => native } };
        if (name === '@capacitor/preferences') return { Preferences };
        if (name === '@brew-core') return { STORAGE_KEY: KEY };
        throw Error('Unexpected dependency: ' + name);
      },
      window: { localStorage: {
        getItem: key => web.get(key) ?? null,
        setItem(key, value) { if (options.failWeb === true || options.failWeb === key) throw Error('Synthetic web write denied'); web.set(key, value); },
        removeItem: key => web.delete(key),
      } },
    });
    return exports;
  }
  return { web, nativeStore, writes, options, reloadModule, exports: reloadModule() };
}
test('legacy native state retains precedence when no write is awaiting acknowledgement', async () => {
  const f = fixture({ webValue: 'synthetic-web-old', nativeValue: 'synthetic-native' });
  assert.equal((await f.exports.createAppPersistence()).load(), 'synthetic-native');
});
test('empty native state migrates the existing fallback without seeding a journal', async () => {
  const f = fixture({ webValue: 'synthetic-existing' });
  assert.equal((await f.exports.createAppPersistence()).load(), 'synthetic-existing');
  assert.equal(f.nativeStore.get(KEY), 'synthetic-existing');
});
test('native write rejection retains the latest durable fallback across process-style reopening and repairs on retry', async () => {
  const f = fixture({ nativeValue: 'synthetic-old', failSet: true });
  const p = await f.exports.createAppPersistence(); p.save('synthetic-new'); await tick();
  assert.equal(p.load(), 'synthetic-new'); assert.equal(f.web.get(KEY), 'synthetic-new');
  assert.equal((await f.reloadModule().createAppPersistence()).load(), 'synthetic-new');
  f.options.failSet = false;
  assert.equal((await f.reloadModule().createAppPersistence()).load(), 'synthetic-new');
  assert.equal(f.nativeStore.get(KEY), 'synthetic-new'); assert.equal(f.web.size, 1);
});
test('native writes start serially so an older delayed completion cannot overwrite the newer save', async () => {
  const f = fixture({ nativeValue: 'synthetic-initial', defer: true });
  const p = await f.exports.createAppPersistence(); p.save('synthetic-older'); p.save('synthetic-newer'); await tick();
  assert.equal(f.writes.length, 1); f.writes[0].complete(); await tick();
  assert.equal(f.writes.length, 2); assert.equal(f.web.get(KEY), 'synthetic-newer');
  assert.ok(f.web.size > 1, 'older acknowledgement must not remove the newer recovery copy');
  f.writes[1].complete(); await tick();
  assert.equal(f.nativeStore.get(KEY), 'synthetic-newer'); assert.equal(f.web.size, 1);
  assert.equal((await f.reloadModule().createAppPersistence()).load(), 'synthetic-newer');
});
test('a rejected queued write does not prevent the following save from persisting', async () => {
  const f = fixture({ nativeValue: 'synthetic-old' }); f.options.failuresLeft = 1;
  const p = await f.exports.createAppPersistence(); p.save('synthetic-failed'); p.save('synthetic-latest'); await tick();
  assert.equal(f.nativeStore.get(KEY), 'synthetic-latest'); assert.equal(f.web.size, 1);
});
test('multiple adapter instances share native write ordering and preserve the latest recovery copy', async () => {
  const f = fixture({ nativeValue: 'synthetic-initial', defer: true });
  const first = await f.exports.createAppPersistence(); const second = await f.exports.createAppPersistence();
  first.save('synthetic-first'); second.save('synthetic-second'); await tick();
  assert.equal(f.writes.length, 1); f.writes[0].complete(); await tick();
  assert.equal(f.writes.length, 2); assert.ok(f.web.size > 1);
  f.writes[1].complete(); await tick();
  assert.equal(f.nativeStore.get(KEY), 'synthetic-second'); assert.equal(f.web.size, 1);
});
test('an unreadable recovery record does not overwrite established native state', async () => {
  const f = fixture({ nativeValue: 'synthetic-native', failSet: true });
  const p = await f.exports.createAppPersistence(); p.save('synthetic-pending'); await tick();
  const recoveryKey = [...f.web.keys()].find(key => key !== KEY); assert.ok(recoveryKey);
  f.web.set(recoveryKey, 'synthetic unreadable recovery metadata'); f.options.failSet = false;
  assert.equal((await f.reloadModule().createAppPersistence()).load(), 'synthetic-native');
  assert.equal(f.nativeStore.get(KEY), 'synthetic-native');
  assert.equal(f.web.get(recoveryKey), 'synthetic unreadable recovery metadata');
});
test('recovery copy survives failure of the primary fallback write and native write', async () => {
  const f = fixture({ nativeValue: 'synthetic-old', webValue: 'synthetic-old', failSet: true, failWeb: KEY });
  const p = await f.exports.createAppPersistence(); p.save('synthetic-new'); await tick();
  assert.equal(f.web.get(KEY), 'synthetic-old');
  assert.equal((await f.reloadModule().createAppPersistence()).load(), 'synthetic-new');
  f.options.failGet = true;
  assert.equal((await f.reloadModule().createAppPersistence()).load(), 'synthetic-new');
});
test('denial of every durable write preserves the active session without claiming relaunch durability', async () => {
  const f = fixture({ nativeValue: 'synthetic-old', failSet: true, failWeb: true });
  const p = await f.exports.createAppPersistence(); p.save('synthetic-memory-only'); await tick();
  assert.equal(p.load(), 'synthetic-memory-only'); assert.equal(f.nativeStore.get(KEY), 'synthetic-old'); assert.equal(f.web.size, 0);
});
test('web-only persistence keeps its existing storage contract', () => {
  const f = fixture({ native: false, webValue: 'synthetic-old' }); const p = f.exports.createWebPersistence();
  p.save('synthetic-new'); assert.equal(p.load(), 'synthetic-new'); assert.equal(f.web.size, 1); assert.equal(f.nativeStore.size, 0);
});
test('actual BrewStore journal edits and deletions survive rejected native writes and reopening', async () => {
  const { pathToFileURL } = require('node:url');
  const { createBrewStore, emptyState } = await import(pathToFileURL(path.resolve(__dirname, '../../packages/brew-core/src/index.ts')).href);
  const now = () => Date.parse('2026-10-02T00:00:00Z');
  const entry = JSON.parse(fs.readFileSync(path.join(__dirname, '../fixtures/sample-journal.v1.json'), 'utf8')).entries[0];
  const original = { ...emptyState(new Date(now()).toISOString()), entries: [entry] };
  const f = fixture({ nativeValue: JSON.stringify(original), failSet: true });
  const first = createBrewStore({ persistence: await f.exports.createAppPersistence(), now });
  first.editEntry(entry.id, { notes: 'Synthetic revised journal note' }); await tick();
  const reopened = createBrewStore({ persistence: await f.reloadModule().createAppPersistence(), now });
  assert.equal(reopened.exportBundle().entries[0].notes, 'Synthetic revised journal note');
  reopened.removeEntry(entry.id); await tick();
  const afterDeletion = createBrewStore({ persistence: await f.reloadModule().createAppPersistence(), now });
  assert.equal(afterDeletion.exportBundle().entries.length, 0); await tick();
  f.options.failSet = false;
  const repaired = createBrewStore({ persistence: await f.reloadModule().createAppPersistence(), now }); await tick();
  assert.equal(repaired.exportBundle().entries.length, 0); assert.equal(JSON.parse(f.nativeStore.get(KEY)).entries.length, 0);
  assert.equal(f.web.size, 1);
});

function lifecycle({ editingEntry = null, tab = 'brew', removalRejects = false } = {}) {
  const source = fs.readFileSync(path.join(__dirname, '../src/App.tsx'), 'utf8');
  const ast = ts.createSourceFile('App.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let effect;
  function visit(node) {
    if (ts.isCallExpression(node) && node.expression.getText(ast) === 'useEffect' && node.arguments[0]?.getText(ast).includes('CapApp.addListener')) effect = node.arguments[0].getText(ast);
    ts.forEachChild(node, visit);
  }
  visit(ast); assert.ok(effect, 'actual listener effect must exist');
  const attached = new Map(); const webEvents = new Map(); const removed = []; const calls = [];
  const exports = {};
  vm.runInNewContext(compile('export const effect = ' + effect), {
    exports, store: { recoverOnOpen: () => calls.push('recover') }, editingEntry, tab,
    setEditingEntry: value => calls.push(['editing', value]), setTab: value => calls.push(['tab', value]),
    document: { visibilityState: 'visible', addEventListener: (name, fn) => webEvents.set(name, fn), removeEventListener: name => webEvents.delete(name) },
    window: { addEventListener: (name, fn) => webEvents.set(name, fn), removeEventListener: name => webEvents.delete(name) },
    CapApp: { addListener(name, fn) { return new Promise((resolve, reject) => attached.set(name, { fn, resolve, reject })); }, minimizeApp: () => calls.push('minimize') },
  });
  const cleanup = exports.effect();
  const resolve = name => attached.get(name).resolve({ remove() { removed.push(name); return removalRejects ? Promise.reject(Error('Synthetic removal denied')) : Promise.resolve(); } });
  return { attached, removed, calls, webEvents, cleanup, resolve };
}
test('handles resolving after effect cleanup are removed rather than leaked', async () => {
  const f = lifecycle(); f.cleanup(); f.resolve('appStateChange'); f.resolve('backButton'); await tick();
  assert.deepEqual(f.removed.sort(), ['appStateChange', 'backButton']); assert.equal(f.webEvents.size, 0);
});
test('resolved native handles and web listeners are removed on normal cleanup', async () => {
  const f = lifecycle(); f.resolve('appStateChange'); f.resolve('backButton'); await tick(); f.cleanup(); await tick();
  assert.deepEqual(f.removed.sort(), ['appStateChange', 'backButton']); assert.equal(f.webEvents.size, 0);
});
test('callbacks from a cleaned-up native effect do not mutate current navigation or recovery', async () => {
  const f = lifecycle(); f.cleanup(); const before = f.calls.length;
  f.attached.get('appStateChange').fn({ isActive: true }); f.attached.get('backButton').fn();
  assert.equal(f.calls.length, before); f.resolve('appStateChange'); f.resolve('backButton'); await tick();
});
test('active native recovery/back behavior stays unchanged across editing, tabs and brew', async () => {
  for (const [options, expected] of [[{ editingEntry: { id: 'synthetic-entry' } }, ['editing', null]], [{ tab: 'journal' }, ['tab', 'brew']], [{}, 'minimize']]) {
    const f = lifecycle(options); f.attached.get('appStateChange').fn({ isActive: true }); f.attached.get('backButton').fn();
    assert.equal(f.calls.filter(call => call === 'recover').length, 2);
    assert.equal(JSON.stringify(f.calls.at(-1)), JSON.stringify(expected));
    f.resolve('appStateChange'); f.resolve('backButton'); await tick(); f.cleanup();
  }
});
test('missing native app plugin remains best effort without leaked web listeners', async () => {
  const f = lifecycle(); f.attached.get('appStateChange').reject(Error('Synthetic unsupported plugin')); f.attached.get('backButton').reject(Error('Synthetic unsupported plugin')); await tick(); f.cleanup();
  assert.equal(f.webEvents.size, 0); assert.deepEqual(f.removed, []);
});
test('native removal rejection remains best effort without unhandled promise rejection', async () => {
  const f = lifecycle({ removalRejects: true }); f.resolve('appStateChange'); f.resolve('backButton'); await tick();
  assert.doesNotThrow(() => f.cleanup()); await tick();
  assert.deepEqual(f.removed.sort(), ['appStateChange', 'backButton']); assert.equal(f.webEvents.size, 0);
});
