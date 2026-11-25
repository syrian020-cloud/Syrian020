const CACHE = 'sa3a-v1';
const ASSETS = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png',
  'sounds/alarm_beep.mp3', 'sounds/alarm_bell.mp3', 'sounds/alarm_siren.mp3'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('sa3a-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(location.origin)) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    const cp = res.clone();
    caches.open(CACHE).then(c => c.put(e.request, cp));
    return res;
  }).catch(() => r)));
});
