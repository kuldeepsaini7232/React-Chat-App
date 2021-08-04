const CACHE_NAME = 'version1';
const urlsToCache = ['index.html'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("opended cahche");
                return cache.addAll(urlsToCache);//set index.html in the cache
            })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
            }).catch(() => caches.match('offline.html'))//when user go offline this page will show
    )
})

self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];//initially empty array
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhiteList.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})