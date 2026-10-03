const CACHE_NAME = 'dross-v231';
const TILE_CACHE = 'osm-tiles-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './french.html',
  './vocab.html',
  './centres.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './data/manifest.js',
  './data/vocab.js',
  './data/vocab-batch-02.js',
  './data/centres.js'
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
          .filter((name) => name !== CACHE_NAME && name !== TILE_CACHE)
        .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.hostname.endsWith('tile.openstreetmap.org') || url.hostname.endsWith('basemaps.cartocdn.com')) {
    event.respondWith(
      caches.open(TILE_CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((response) => {
            if (response.ok) {
              const clone = response.clone();
              cache.keys()
                .then((keys) => (keys.length >= 800 ? cache.delete(keys[0]) : undefined))
                .then(() => cache.put(event.request, clone));
            }
            return response;
          });
        })
      )
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => caches.match('./french.html'));
    })
  );
});
