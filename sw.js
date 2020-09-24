importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([{"revision":"cbad8736fb6a7caf06c449925d3b961b","url":"myapp.css"},{"revision":"c6d4a027e904a5b08a9d554bd48bf411","url":"myapp.js"},{"revision":"a7be22a7abc4c422f2ff7b1e64180864","url":"../index.html"}]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
