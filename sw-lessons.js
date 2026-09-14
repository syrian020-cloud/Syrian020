const CACHE_NAME = 'duroos-v1';
const CACHE_PREFIX = 'duroos-';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './lessons.html',
  './manifest-lessons.json',
  './icon-192.png',
  './icon-512.png'
];
const OWNED_URLS = new Set(FILES_TO_CACHE.map((url) => new URL(url, self.location.href).href));

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(FILES_TO_CACHE.map((url) => new Request(url, { cache: 'reload' })))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (!OWNED_URLS.has(event.request.url.split('#')[0])) return;
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => caches.match('./lessons.html'));
    })
  );
});
