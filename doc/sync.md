# Sincronización en background

https://github.com/WICG/BackgroundSync/blob/master/explainer.md
https://ponyfoo.com/articles/backgroundsync

En app.js

```javascript
navigator.serviceWorker.ready.then(function(registration) {
  registration.sync.register('some-tag').then(function() {
    // registration succeeded
  }, function() {
    // registration failed
  });
});
```

sync will fire when the user agent believes the user has connectivity.

En el service worker

```javascript
self.addEventListener('sync', function(event) {
  if (event.tag == 'some-tag') {
    event.waitUntil(sendEverythingPending());
  }
});
```

The promise passed to waitUntil is a signal to the user agent that the sync event is ongoing and that it should keep the service worker alive if possible. Rejection of the event signals to the user agent that the sync failed. Upon rejection the user agent should reschedule (likely with a user agent determined backoff).

The user agent may coalesce synchronizations to reduce the number of times the device, radio and browser need to wake up. The coalescing can be across origins, and even coalesced across the OS with native synchronizations. Although the event timings are coalesced, you still get an event per pending sync registration.



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

tag: This operates like a notification's tag. If you register a sync and an existing sync with the same tag is pending, it returns the existing registration and updates it with the options provided. Note: one-off and periodic sync tags have separate namespaces.
minPeriod: The minimum time between successful sync events. A value of 0 (the default) means the UI may fire the event as frequently as it wishes. This value is a suggestion to prevent over-syncing. Syncing may be less frequent depending on heuristics such as visit frequency & device status. If timing is critical, the push API may better suit your requirements.
powerState: Either "auto" (default) or "avoid-draining". "avoid-draining" will delay syncs on battery-powered devices while that battery isn't charging. "auto" allows syncs to occur during battery-drain, although the user agent may choose to avoid this depending on global device status (such as battery-saving mode) or user preferences.
networkState: One of "online" (default), "avoid-cellular", or "any". "avoid-cellular" will delay syncs if the device is on a cellular connection - but be aware that some users may never use another connection type. "online" will delay syncs if the device is online, although the user agent may choose to avoid particular connection types depending on global device status (such as roaming) or user preferences. "any" is similar to "online", except syncs may happen while the device is offline.

To respond to a periodic sync:

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