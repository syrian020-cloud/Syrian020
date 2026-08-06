const CACHE_NAME = 'dross-v117';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './french.html',
  './vocab.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './data/manifest.js',
  './data/vocab.js',
  './data/vocab-batch-02.js'
];

for (let i = 1; i <= 39; i++) {
  FILES_TO_CACHE.push('./data/stage' + String(i).padStart(2, '0') + '.js');
}

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
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => caches.match('./french.html'));
    })
  );
});
