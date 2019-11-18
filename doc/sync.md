# Sincronización en background

La sinconización es un proceso que se registra en el javascript "normal".

En app.js

```javascript
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready.then(function(registration) {
    registration.sync.register('some-tag').then(function() {
      // registration succeeded
    }, function() {
      // registration failed
    });
  });
}
```

Al registrar una sincronización:
- Si el navegador tiene conexión, se lanza el evento **sync** del service worker al momento.
- Si el navegador no tiene conexión, el evento **sync** del service worker queda pendiente y se lanzará cuando el navegador recupere la conexión.

En el service worker:

```javascript
self.addEventListener('sync', function(event) {
  if (event.tag == 'some-tag') {
    event.waitUntil(sendEverythingPending());
  }
});
```



Ejercicio: Enivar mensajes de chat con sync. 

Si no estamos online, registramos un sync y guardamos los mensajes en localstorage. Damos la "impresión" al usuario de que los datos se han enviado y guardado.
En el sync, se realiza la petición.

https://www.twilio.com/blog/2017/02/send-messages-when-youre-back-online-with-service-workers-and-background-sync.html



## Sincronización periódica (en fase de diseño)

```javascript
navigator.serviceWorker.ready.then(function(registration) {
  registration.periodicSync.register({
    tag: 'get-latest-news',         // default: ''
    minPeriod: 12 * 60 * 60 * 1000, // default: 0
    powerState: 'avoid-draining',   // default: 'auto'
    networkState: 'avoid-cellular'  // default: 'online'
  }).then(function(periodicSyncReg) {
    // success
  }, function() {
    // failure
  })
});
```



En el service worker:

```javascript
self.addEventListener('periodicsync', function(event) {
  if (event.registration.tag == 'get-latest-news') {
    event.waitUntil(fetchAndCacheLatestNews());
  }
  else {
    // unknown sync, may be old, best to unregister
    event.registration.unregister();
  }
});
```

## Enlaces de interés:

- https://developers.google.com/web/updates/2015/12/background-sync

- https://ponyfoo.com/articles/backgroundsync