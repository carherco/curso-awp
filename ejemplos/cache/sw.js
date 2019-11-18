var version = 'v1';

// Instalación: Creamos una caché para nuestro SW y cacheamos todos los assets.
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version)
    .then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.webmanifest',
        'sw.js',
        'app.js'
      ]);
    })
  );
});

// Activación: eliminamos cachés de otros SW
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
    .then(function(keys) {
      return Promise.all(keys.filter(function(key){
        return key !==version;
      }).map(function (key) {
        return caches.delete(key);
      }))
    })
  );
});

// Fetch: buscamos el recurso en la cache, si no está en en la caché hacemos petición (excepto que estemos off-line).
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if(response) {
        return response;
      }
      if(!navigator.onLine) {
        return caches.match(new Request('paginaoffline.html'));
      } 
      return fetch(event.request);
    })
  );
});

