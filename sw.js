const CACHE_NAME = "rq-inn-shell-v6";
const OFFLINE_URL = "./index.html";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./main.js",
  "./site.webmanifest",
  "./font/GloranthaCoreRunes1.5.woff2",
  "./images/header/S__56590338.jpg",
  "./images/header/S__56590340_0.jpg",
  "./images/header/S__56590341_0.jpg",
  "./images/header/S__56590342_0.jpg",
  "./images/branding/rq-inn-logo.png",
  "./images/apps/pdf_tools_icon-512.png",
  "./images/apps/png-maker-icon-512.png",
  "./images/apps/MD-icon-512.png",
  "./images/play-aids/calendar.png",
  "./images/branding/rq-inn-com-qr.png",
  "./images/pwa/icon-192.png",
  "./images/pwa/icon-512.png",
  "./images/pwa/favicon-32.png",
  "./images/pwa/favicon-16.png",
  "./images/pwa/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return networkResponse;
        })
        .catch(() => caches.match(OFFLINE_URL));
    })
  );
});
