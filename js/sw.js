// Service Worker para Cache - Tostes Website
const CACHE_NAME = "tostes-v1.1.0"; // <-- Mudei a versão
const STATIC_CACHE = [
  "/",
  "/index.html",
  "/css/style.css", // <-- Corrigido
  "/js/script.js", // <-- Corrigido
  "https" +
    "://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",

  // <-- Adicionei os principais assets para cache -->
  "/img/logo.webp",
  "/img/hero-tech.jpg",
  "/img/sobre/tostesperfil.webp",
  "/img/petroleowebapp.webp",
  "/img/gestaomensal.webp",
  "/img/gestaowebapp.webp",
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Cacheando arquivos estáticos");
        return cache.addAll(STATIC_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Service Worker: Limpando cache antigo:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  // Ignora requisições que não são GET (como POST, etc.)
  if (event.request.method !== "GET") {
    return;
  }

  // Ignora requisições do Google Analytics/Tag Manager
  if (
    event.request.url.includes("googletagmanager") ||
    event.request.url.includes("google-analytics")
  ) {
    return fetch(event.request);
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // 1. Encontrou no Cache: Retorna a resposta do cache
        if (response) {
          return response;
        }

        // 2. Não encontrou no Cache: Busca na rede
        return fetch(event.request).then((networkResponse) => {
          // Opcional: Clona a resposta e salva no cache para a próxima vez
          // (Se você quiser que o cache cresça dinamicamente, descomente abaixo)
          /*
          let responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          */
          return networkResponse;
        });
      })
      .catch(() => {
        // 3. Falha (offline e não está no cache): Retorna o index.html
        if (event.request.destination === "document") {
          return caches.match("/index.html");
        }
        // Retorna nada para outros assets (como imagens) que falharam
      })
  );
});
