// Petición con JQuery
$( document ).ready(function() {
    console.log('Antes de la petición (jquery)');
    $.get('https://reqres.in/api/users').then( 
        (respuesta) => {
            console.log('dentro del then');
            console.log(respuesta);
        });
    console.log('después de la petición');
});

// Petición con API Fetch
// $( document ).ready(function() {
//     console.log('Antes de la petición (fetch)');
//     fetch('https://reqres.in/api/users').then( 
//         (respuesta) => {
//             console.log('dentro del then');
//             console.log(respuesta);
//             console.log(respuesta.json().then(body => console.log(body)));
//         });
//     console.log('después de la petición');
// });