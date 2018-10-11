# Curso de Aplicaciones Web Progresivas

- [Introducción](introduccion.md)
- [El archivo manifest](manifest.md)
3) Service Workers
4) Funcionamiento offline
5) Patrones de cacheo



CURSO DE APLICACIONES WEB PROGRESIVAS

Se presupone a los alumnos conocimientos de programación de aplicaciones web.

Introducción (0.5h)
¿Qué son las Aplicaciones Web Progresivas (AWP)?
Características de las AWP
Diferencias entre las AWP y las Aplicaciones Híbridas

Cómo implementar AWP
Services Workers (2.5h)
Patrón AppShell (1.5h)
Manifiesto de aplicación (0.5h)
Herramienta de auditoría Lighthouse de Google (1h)

Ejercicio final (1.5h - 2h)

Tiempo total: 7h - 8h





















Importancia de funcionar en modo offline 

En la vida real se dan muchísimas ocasiones en las que nos quedamos sin conexión 
Aviones
Multitudes
Interiores de edificios, metro... 

Las aplicaciones web que funcionan offline proporcionan al usuario una gran experiencia.



Service Worker - Qué son 

Se ejecutan en un contexto distinto (worker). Por lo tanto no tienen acceso al DOM, ni al localStorage…
Se ejecutan en un hilo distinto al del javascript principal de la aplicación y son completamente asíncronos.
Por seguridad, solamente funcionan sobre HTTPS para evitar ataques “man in the middle”.
Algunos navegadores no permiten la ejecución de Service Workers en navegación privada.
Funcionan con promesas.
Cómo funcionan los service workers

Los Service Workers interceptan todas las peticiones que realiza el dispositivo.






https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-concepts/content/docs/introduction-to-progressive-web-app-architectures.html

https://google-developer-training.gitbooks.io/progressive-web-apps-ilt-concepts/content/docs/introduction-to-progressive-web-app-architectures.html#what


Note: Workbox is the successor to sw-precache and sw-toolbox. It is a collection of libraries and tools used for generating a service worker, precaching, routing, and runtime-caching. Workbox also includes modules for easily integrating background sync and Google analytics into your service worker. See the PWA Workbox Lab to learn how to use Workbox to easily create production-ready service workers. Also, see the Workbox page on developers.google.com for an explanation of each module contained in Workbox.


Push Notifications can provide great benefits for users if applied in a timely, relevant and and precise manner.