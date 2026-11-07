const CACHE_NAME = 'mawar-aisyah-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json'
];

// Pasang Service Worker dan simpan fail ke dalam Cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

// Guna Cache jika tiada internet (Offline Mode)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
