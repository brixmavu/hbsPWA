// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// workbox.precaching.precacheAndRoute([
//   { url: '/', revision: '1' },
// //   { url: '/index.handlebars', revision: '1' },
// ]);

// workbox.routing.registerRoute(
//   /\.(?:js|css|png|gif|jpg|svg)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'static-resources',
//   })
// );

self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('Service worker installed.');
  event.waitUntil(
    caches.open('my-cache-name')
      .then(function(cache) {
        return cache.addAll([
          // '/',
          '/stylesheets/style.css',
          'javascripts/script.js',
          'images/image.png'
        ]);
      })
  );
});

self.addEventListener('activate', function(event) {
  // Perform activate steps
  console.log('Service worker activated.');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
