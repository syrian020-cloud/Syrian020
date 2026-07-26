const CACHE_NAME = 'dross-v5';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './french.html',
  './manifest.json',
  './data/manifest.js',
  './data/stage01.js',
  './data/stage02.js',
  './data/stage03.js',
  './data/stage04.js',
  './data/stage05.js',
  './data/stage06.js',
  './data/stage07.js',
  './data/stage08.js',
  './data/stage09.js',
  './data/stage10.js',
  './data/stage11.js',
  './data/stage12.js',
  './data/stage13.js',
  './data/stage14.js',
  './data/stage15.js',
  './data/stage16.js',
  './data/stage17.js',
  './data/stage18.js',
  './data/stage19.js',
  './data/stage20.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => caches.match('./index.html'));
    })
  );
});
