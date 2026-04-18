const CACHE_NAME = "rq-inn-shell-v7";
const OFFLINE_URL = "./index.html";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./main.js",
  "./site.webmanifest",
  "./font/GloranthaCoreRunes1.5.woff2",
  "./images/apps/GloranthaGIS-icon-512.png",
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

function isSameOrigin(requestUrl) {
  return new URL(requestUrl).origin === self.location.origin;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const networkResponse = await fetch(request, { cache: "no-store" });

    if (networkResponse && networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    return cachedResponse || caches.match(OFFLINE_URL);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  const networkPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }

      return networkResponse;
    })
    .catch(() => null);

  return cachedResponse || networkPromise || caches.match(OFFLINE_URL);
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const isDocumentRequest = event.request.mode === "navigate";
  const isSameOriginRequest = isSameOrigin(event.request.url);

  if (isDocumentRequest) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  if (!isSameOriginRequest) {
    return;
  }

  if (
    requestUrl.pathname.endsWith(".css") ||
    requestUrl.pathname.endsWith(".js") ||
    requestUrl.pathname.endsWith(".woff2") ||
    requestUrl.pathname.endsWith(".png") ||
    requestUrl.pathname.endsWith(".jpg") ||
    requestUrl.pathname.endsWith(".jpeg") ||
    requestUrl.pathname.endsWith(".webmanifest")
  ) {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});
