const CACHE_NAME = 'simulasi-v1';
const urlsToCache = [
  './',
  'index.html',
  'manifest.json',
  'logo.png',
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', 
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
  '11.jpg', '12.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
