const CACHE_NAME = "tostes-portfolio-cache-v2.5.2"; 

const URLS_TO_CACHE = [
  "/",
  "index.html",
  "css/style.css",
  "js/script.js", 
  "https://unpkg.com/typed.js@2.0.16",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "https://unpkg.com/aos@2.3.1/dist/aos.css",
  "img/iconetostes.ico",
  "img/logo.webp",
  "img/sobre/tostesperfil.webp",
  "img/hero-tech.jpg",
];

self.addEventListener("install", (event) => {
  console.log("✅ Service Worker: Instalando...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("✅ Service Worker: Adicionando App Shell ao cache.");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("✅ Service Worker: Ativando...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName.startsWith("tostes-portfolio-cache-") &&
            cacheName !== CACHE_NAME
          ) {
            console.log(
              "🗑️ Service Worker: Deletando cache antigo:",
              cacheName
            );
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // ===================================================================
  // CORREÇÃO PARA O ERRO 'chrome-extension' ESTÁ AQUI
  // Ignoramos requisições que não são GET e requisições de extensões.
  if (event.request.method !== "GET" || !event.request.url.startsWith("http")) {
    return;
  }
  // ===================================================================

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return cachedResponse || fetchPromise;
      });
    })
  );
});
