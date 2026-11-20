const CACHE='verbes-v2';
const CORE=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(
 fetch(e.request).then(n=>{const cp=n.clone();caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});return n})
 .catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
