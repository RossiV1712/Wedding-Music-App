const staticPhoneStore = "Wedding-Music-Store"
const assets = [
    "/",
    "/index.html",
    "/styles.css",
    "/Script.js",
    "/GuestArrivalMusic.mp3",
    "/EntranceMusic.mp3",
    "/SigningMusic.mp3",
    "/ExitMusic.mp3"
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