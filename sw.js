const CACHE_NAME = 'ssc-english-v3'; // Increment version to v3 to force update
const ASSETS = [
  './index.html',
  // IF you renamed your HTML file to index.html on GitHub, use './index.html' here
  // IF the file is still named 'AI test portal_ver7.html', keep it as is.
  './AI test portal_ver7.html', 
  './questions.js',
  './manifest.json',
  './logo.png' 
  // ❌ REMOVED: https://cdn.tailwindcss.com
  // ❌ REMOVED: https://cdnjs.cloudflare.com/...
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
