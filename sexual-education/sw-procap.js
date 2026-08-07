const CACHE_NAME = 'sexed-v2';
const FILES_TO_CACHE = [
  './procap.html',
  './manifest-procap.json',
  './icon-procap-192.png',
  './icon-procap-512.png',
  './bienvenue-lesson.jpg',
  './whatsapp-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => caches.match('./procap.html'));
    })
  );
});
