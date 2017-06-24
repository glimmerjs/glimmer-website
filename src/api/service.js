var CACHE_NAME = 'glimmer-api-docs';
var urlsToCache = [
    '/api/',
    'app.css',
    'app.js',
    'assets/docs/main.js',
    'https://cdnjs.cloudflare.com/ajax/libs/markdown-it/8.3.1/markdown-it.js',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/typescript.min.js',
    'https://fonts.googleapis.com/css?family=Roboto|Robot+Mono'
];
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(caches.open(CACHE_NAME)
        .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
    }));
});
self.addEventListener('fetch', function (event) {
    let request = event.request;
    if (/api\/projects\//.test(request.url)) {
        request = new Request('/api/');
    }
    event.respondWith(caches.match(request)
        .then(function (response) {
        // Cache hit - return response
        if (response) {
            return response;
        }
        return fetch(request);
    }));
});
