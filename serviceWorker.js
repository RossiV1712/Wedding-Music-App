const staticPhoneStore = "Wedding-Music-Store"
const assets = [
    "/Wedding-Music-App/",
    "/Wedding-Music-App/index.html",
    "/Wedding-Music-App/styles.css",
    "/Wedding-Music-App/Script.js",
    "/Wedding-Music-App/GuestArrivalMusic.mp3",
    "/Wedding-Music-App/EntranceMusic.mp3",
    "/Wedding-Music-App/SigningMusic.mp3",
    "/Wedding-Music-App/ExitMusic.mp3"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticPhoneStore).then(cache => {
        cache.addAll(assets)
      })
    )
  })

  self.addEventListener('fetch', event => {
    event.respondWith((async () => {
      const cache = await caches.open(staticPhoneStore);
  
      // Get the resource from the cache.
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
          try {
            // If the resource was not in the cache, try the network.
            const fetchResponse = await fetch(event.request);
  
            // Save the resource in the cache and return it.
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          } catch (e) {
            // The network failed.
          }
      }
    })());
  });