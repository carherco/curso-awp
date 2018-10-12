# Curso de Aplicaciones Web Progresivas

- [Introducción](introduccion.md)
- [El archivo manifest](manifest.md)
- [Service Workers](manifest.md)
    - Funcionamiento offline
    - Patrones de cacheo
    - Notificaciones
    - Notificaciones Push
- Herramienta de auditoría Lighthouse de Google

Apis involucradas:

- [Web App Manifest](https://www.w3.org/TR/appmanifest/)
- [Service Workers](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)
- [Promises/A+](https://github.com/carherco/curso-promesas)
- [Api Fetch](./api_fetch.md)
- [Api Cache](api_cache.md)
- [Battery Status](https://w3c.github.io/battery/)

CURSO DE APLICACIONES WEB PROGRESIVAS

Se presupone a los alumnos conocimientos de programación de aplicaciones web.

Introducción (0.5h)
¿Qué son las Aplicaciones Web Progresivas (AWP)?
Características de las AWP
Diferencias entre las AWP y las Aplicaciones Híbridas

Cómo implementar AWP
Manifiesto de aplicación (0.5h)
Services Workers (2.5h)
 - Offline
 - Cache


Patrón AppShell (1.5h)
Herramienta de auditoría Lighthouse de Google (1h)

Ejercicio final (1.5h - 2h)

Tiempo total: 7h - 8h





















Importancia de funcionar en modo offline 

En la vida real se dan muchísimas ocasiones en las que nos quedamos sin conexión 
Aviones
Multitudes
Interiores de edificios, metro... 

Las aplicaciones web que funcionan offline proporcionan al usuario una gran experiencia.


Note: Workbox is the successor to sw-precache and sw-toolbox. It is a collection of libraries and tools used for generating a service worker, precaching, routing, and runtime-caching. Workbox also includes modules for easily integrating background sync and Google analytics into your service worker. See the PWA Workbox Lab to learn how to use Workbox to easily create production-ready service workers. Also, see the Workbox page on developers.google.com for an explanation of each module contained in Workbox.


Push Notifications can provide great benefits for users if applied in a timely, relevant and and precise manner.