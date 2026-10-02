const CACHE_NAME = 'dross-v69';
const TILE_CACHE = 'osm-tiles-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './french.html',
  './map.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './data/manifest.js',
  './vendor/leaflet/leaflet.css',
  './vendor/leaflet/leaflet.js',
  './vendor/leaflet/images/marker-icon.png',
  './vendor/leaflet/images/marker-icon-2x.png',
  './vendor/leaflet/images/marker-shadow.png',
  './vendor/leaflet/images/layers.png',
  './vendor/leaflet/images/layers-2x.png'
];

for (let i = 1; i <= 39; i++) {
  FILES_TO_CACHE.push('./data/stage' + String(i).padStart(2, '0') + '.js');
}

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
          .filter((name) => name !== CACHE_NAME && name !== TILE_CACHE)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.hostname.endsWith('tile.openstreetmap.org')) {
    event.respondWith(
      caches.open(TILE_CACHE).then((cache) =>
        cache.match(event.request).then(
          (cached) =>
            cached ||
            fetch(event.request)
              .then((response) => {
                const clone = response.clone();
                cache
                  .keys()
                  .then((keys) =>
                    keys.length >= 800 ? cache.delete(keys[0]) : undefined
                  )
                  .then(() => cache.put(event.request, clone));
                return response;
              })
              .catch(() => cached)
        )
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
