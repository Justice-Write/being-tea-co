const CACHE_PREFIX = "being-tea-preview-";
const STATIC_CACHE = `${CACHE_PREFIX}assets-v1`;
const CORE_ASSETS = [
  "/offline",
  "/manifest.webmanifest",
  "/favicon.svg",
  "/icons/being-tea-192.png",
  "/icons/being-tea-512.png",
  "/icons/being-tea-maskable-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== STATIC_CACHE)
          .map((key) => caches.delete(key)),
      ))
      .then(() => self.clients.claim()),
  );
});

function isPublicAsset(url, request) {
  if (!["image", "style", "script", "font"].includes(request.destination)) {
    return false;
  }
  return url.pathname.startsWith("/assets/")
    || url.pathname.startsWith("/images/")
    || url.pathname.startsWith("/icons/")
    || ["/favicon.svg", "/logo.svg", "/og.png"].includes(url.pathname);
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || request.headers.has("range")) {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request, { cache: "no-store" })
        .catch(() => caches.match("/offline", { ignoreSearch: true })),
    );
    return;
  }

  if (!isPublicAsset(url, request)) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response.ok && response.type === "basic") {
        const copy = response.clone();
        event.waitUntil(caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy)));
      }
      return response;
    })),
  );
});
