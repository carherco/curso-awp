// 3 llamadas a .then() sobre la misma promesa, sin encadenar
$( document ).ready(function() {
    console.log('Antes de la petición');
    
    let promise = $.get('https://reqres.in/api/users')
    
    promise.then( (respuesta) => {
            console.log('dentro del primer then');
            console.log(respuesta);
    });
    
    promise.then( (respuesta) => {
            console.log('dentro del segundo then');
            console.log(respuesta);
    });
    
    promise.then( (respuesta) => {
            console.log('dentro del tercer then');
            console.log(respuesta);
    });

    console.log('después de la petición');
});

// 3 llamadas a .then() encadenadas (si no hacemos return, a las siguientes no les llega nada)
// $( document ).ready(function() {
//     console.log('Antes de la petición');
    
//     $.get('https://reqres.in/api/users')
    
//     .then( (respuesta) => {
//             console.log('dentro del primer then');
//             console.log(respuesta);
//     })

//     .then( (respuesta) => {
//             console.log('dentro del segundo then');
//             console.log(respuesta);
//     })

//     .then( (respuesta) => {
//             console.log('dentro del tercer then');
//             console.log(respuesta);
//     })
//     ;

//     console.log('después de la petición');
// });

// 3 llamadas a .then() encadenadas, y cada una modificando el valor que le llega a la siguiente
// $( document ).ready(function() {
//     console.log('Antes de la petición');
    
//     $.get('https://reqres.in/api/users')
    
//     .then( (respuesta) => {
//             console.log('dentro del primer then');
//             console.log(respuesta);
//             return respuesta.data;
//             //return new Promise.resolve(respuesta.data)
//     })
    
//     .then( (respuesta) => {
//             console.log('dentro del segundo then');
//             console.log(respuesta);
//             return respuesta[0];
//     })
    
//     .then( (respuesta) => {
//             console.log('dentro del tercer then');
//             console.log(respuesta);
//     })
//     ;

//     console.log('después de la petición');
// });


// https://javascript.info/promise-chaining

