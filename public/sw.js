
// STALE WHILE REVALIDATE

self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.open("dynamic-cache").then((cache) => {
        return cache.match(event.request).then((response) => {
          const fetchPromise = fetch(event.request).then(
            (networkResponse) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            }
          );
          return response || fetchPromise;
        });
      })
    );
  });