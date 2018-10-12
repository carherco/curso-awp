# Patrones de cacheo

## Network only

- No se cachea ningún recurso
- Siempre se buscan los recursos en la red
- Si la red falla, la petición falla

Resuestas a peticiones POST, PUT, DELETE...


## Cache only

- Siempre se busca el recurso en la cache
- Si no está en la caché, no se sirve el recurso

Este patrón se puede utilizar, por ejemplo, en situaciones de nivel crítico de batería.

## Cache First

- Se busca el recurso en la cache
- Si no está en la cache, entonces se busca en la red

Este patrón se puede utilizar en situaciones donde el contenido raramente cambie (archivos css, archivos javascript, datos estáticos...)

## Network First

- Se busca el recurso en la red y se cachea.
- Solamente cuando la red falla, se busca el recurso en la cache

Este patrón se puede utilizar cuando queremos ofrecer al usuario siempre el contenido más actualizado posible, pero que en caso de que se quede sin cobertura, pueda seguir utilizando la aplicación.

## Fastest

- Se busca el recurso tanto en la cache como en la red.
- Se sirve el recurso que se encuentre primero.

Aunque la mayoría de las veces la cache contestará antes, se puede aprovechar la petición a la red para cachear la respuesta para la siguiente vez