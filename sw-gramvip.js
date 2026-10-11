const CACHE_NAME = 'gramvip-v3';
const FILES_TO_CACHE = [
  './gramvip.html',
  './manifest-gramvip.json',
  './icon-gramvip-192.png',
  './icon-gramvip-512.png',
  './js/edge-tts.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(FILES_TO_CACHE.map((url) => new Request(url, { cache: 'reload' })))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Only ever delete gramvip's own caches — other apps on this origin keep theirs.
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name.startsWith('gramvip-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isNav = event.request.mode === 'navigate';
  const isOurs = FILES_TO_CACHE.some((f) => url.pathname.endsWith(f.replace('./', '/')));
  // Everything that is not gramvip's own asset/page passes straight through,
  // so this worker never interferes with the other apps sharing this origin.
  if (!isNav && !isOurs) return;
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached ||
      fetch(event.request).catch(() => {
        // Offline fallback only for gramvip's own page — never for other pages.
        if (isNav && url.pathname.endsWith('/gramvip.html')) {
          return caches.match('./gramvip.html');
        }
        return Response.error();
      })
    )
  );
});
