const CACHE_NAME = 'savepro-v4';   // bump on every savepro change — existing installs must drop the old cached page
const FILES_TO_CACHE = [
  './savepro.html',
  './manifest-savepro.json',
  './icon-savepro-192.png',
  './icon-savepro-512.png'
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
  // Only ever delete savepro's own caches — other apps on this origin keep theirs.
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name.startsWith('savepro-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isNav = event.request.mode === 'navigate';
  const isOurs = FILES_TO_CACHE.some((f) => url.pathname.endsWith(f.replace('./', '/')));
  // Everything that is not savepro's own asset/page passes straight through,
  // so this worker never interferes with the other apps sharing this origin.
  if (!isNav && !isOurs) return;
  if (isNav) {
    // Network-first for savepro's own page only: fresh HTML when online,
    // cached copy when offline or on HTTP errors — updates reach existing
    // installs without a cache-name bump. Other apps' pages pass through.
    if (!url.pathname.endsWith('/savepro.html')) return;
    const cachedPage = () =>
      caches.match(event.request).then((cached) =>
        cached || caches.match('./savepro.html'));
    event.respondWith(
      fetch(event.request).then((res) => {
        if (res.type === 'opaqueredirect') return res;   // let the browser follow redirects
        if (!res.ok) return cachedPage();                // 4xx/5xx resolve fetch — still serve the app
        const copy = res.clone();
        // chain the write into the response promise so the worker stays
        // alive until the updated page is actually in the cache
        return caches.open(CACHE_NAME)
          .then((c) => c.put('./savepro.html', copy)).then(() => res);
      }).catch(cachedPage)
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
