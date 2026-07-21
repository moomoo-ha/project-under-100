const CACHE = 'project-under-100-v14';
const APP_SHELL = ['./', './index.html', './manifest.json', './css/app.css', './css/tracking.css', './css/photos.css', './css/guidance.css', './css/reminders.css', './css/cloud.css', './css/profile.css', './css/schedule.css', './css/accessibility.css', './css/insights.css', './js/app.js', './js/storage.js', './js/tracking.js', './js/insights.js', './js/photos.js', './js/cloud.js', './js/cloud-config.js', './js/workout-player.js', './data/programme.js', './icons/icon-180.svg', './icons/icon-192.svg', './icons/icon-512.svg'];

self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response.ok && (new URL(event.request.url).origin === location.origin || event.request.url.includes('cdn.jsdelivr.net'))) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => event.request.mode === 'navigate' ? caches.match('./index.html') : cached)));
});
