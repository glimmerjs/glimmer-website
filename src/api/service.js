var rootURL = '/api/';
var documentRegExp = new RegExp('/api/($|projects)');
var CACHE_NAME = 'glimmer-api-docs';
var URLS_TO_CACHE = [
    '/api/',
    'app.css',
    'app.js',
    'assets/docs/main.js',
    'assets/images/logo.png',
    'https://fonts.googleapis.com/css?family=Roboto|Robot+Mono'
];
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(caches.open(CACHE_NAME)
        .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
    }));
});
self.addEventListener('fetch', function (event) {
    let request = event.request;
    if (documentRegExp.test(request.url)) {
        // map all document requests to the root URL
        // (as routes are only handled once the app is loaded)
        request = new Request(rootURL);
        // document requests are using the cache as a
        // fallback so we can ship new version of the app
        event.respondWith(fetch(request)
            .catch(function () {
            return caches.match(request);
        }));
    }
    else {
        // asset requests can be handled using via the cache
        // first as URLs are fingerprinted
        event.respondWith(caches.match(request)
            .then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(request);
        }));
    }
});
