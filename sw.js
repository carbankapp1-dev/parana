// Car Bank PWA — Service Worker
const CACHE_NAME = 'carbank-sp1-v1';

// Arquivos para cachear (offline support básico)
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png'
];

// Instala e faz cache dos assets principais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Remove caches antigos ao ativar nova versão
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Estratégia: Network First (tenta rede, cai no cache se offline)
self.addEventListener('fetch', event => {
  // Ignora requisições do Firebase e externas (precisam de rede sempre)
  const url = new URL(event.request.url);
  if (
    url.hostname.includes('firebase') ||
    url.hostname.includes('google') ||
    url.hostname.includes('cdnjs') ||
    url.hostname.includes('wa.me') ||
    event.request.method !== 'GET'
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Guarda cópia no cache
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
