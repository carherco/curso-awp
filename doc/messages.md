# Mensajes

## Mandar mensaje al service worker:

En el js principal:

```js
navigator.serviceWorker.controller.postMessage({ command: 'deleteCache', key: 'v1' });
```

En el service worker:

```js
self.addEventListener('message', function handler (event) {
  if (event.data.command === 'deleteCache') {
    caches.delete(event.data.key);
  }
});
```

## Mandar mensaje desde el service worker

En el Service Worker

```js
addEventListener('fetch', event => {
  event.waitUntil(async function() {
    // Conseguir el cliente
    const client = await clients.get(event.clientId);
    // El usuario podría haber cerrado la pestaña
    if (!client) return;

    // Enviar mensaje al cliente
    client.postMessage({
      msg: "Hey I just got a fetch from you!",
      url: event.request.url
    });
  }());
});
```

En el js principal:

```js
navigator.serviceWorker.addEventListener('message', event => {
  console.log(event.data.msg, event.data.url);
});
```

