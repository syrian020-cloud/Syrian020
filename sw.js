const CACHE_NAME = 'dross-v6';
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
  './data/stage20.js',
  './data/stage21.js',
  './data/stage22.js',
  './data/stage23.js',
  './data/stage24.js',
  './data/stage25.js',
  './data/stage26.js',
  './data/stage27.js',
  './data/stage28.js',
  './data/stage29.js',
  './data/stage30.js'
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
