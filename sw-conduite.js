const CACHE_NAME = 'conduite-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './conduite.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE.map((url) => new Request(url, { cache: 'reload' })));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => caches.match('./index.html'));
    })
  );
});
