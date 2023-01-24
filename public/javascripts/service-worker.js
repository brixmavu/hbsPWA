importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1' },
//   { url: '/index.handlebars', revision: '1' },
]);

workbox.routing.registerRoute(
  /\.(?:js|css|png|gif|jpg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'static-resources',
  })
);