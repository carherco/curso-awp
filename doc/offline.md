# NavigatorOnLine interface

Esta interfaz está implementada por el objeto global **navigator**.

## Interfaz

**NavigatorOnLine.onLine** Read only: Devuelve un Boolean indicando si el navegador está trabajando online.

## Ejemplo

```javascript
this.addEventListener('fetch', function(event) {
  if(!navigator.onLine) {
    event.respondWith(new Response('<h1>Estás sin conexión</h1>', {headers: { 'Content-Type': 'text/html'}}));
  } else {
    event.respondWith(fetch(event.request));
  }
});
```

## Enlaces de interés

https://developer.mozilla.org/es/docs/Web/API/Navigator

https://developer.mozilla.org/es/docs/Web/API/NavigatorOnLine