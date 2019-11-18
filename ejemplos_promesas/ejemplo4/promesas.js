// then
// $( document ).ready(function() {
//     console.log('Antes de la petición');
//     fetch('https://reqres.in/api/users').then( 
//         (respuesta) => {
//             console.log('dentro del then');
//             console.log(respuesta);
//         });
//     console.log('después de la petición');
// });

// catch
// $( document ).ready(function() {
//     console.log('Antes de la petición');
//     fetch('https://reqresxxx.in/api/users').catch( 
//         (respuesta) => {
//             console.log('dentro del catch');
//             console.log(respuesta);
//         });
//     console.log('después de la petición');
// });

// then + catch
// $( document ).ready(function() {
//     console.log('Antes de la petición');
//     $.get('https://reqres.in/api/users').then( 
//         (respuesta) => {
//             console.log('dentro del then');
//             console.log(respuesta);
//         })
//         .catch( 
//         (respuesta) => {
//             console.log('dentro del catch');
//             console.log(respuesta);
//         });
//     console.log('después de la petición');
// });


// finally() - ¡NO RECIBE PARÁMETROS! - NO es soportado por algunos navegadores
// $( document ).ready(function() {
//     console.log('Antes de la petición');
//     let isLoading = true;
//     fetch('https://reqres.in/api/users')
//     .then( 
//         (respuesta) => {
//             console.log('dentro del catch');
//             console.log(respuesta);
//         })
//     .catch(
//         (respuesta) => {
//             console.log('dentro del catch');
//             console.log(respuesta);
//         })
//     .finally( 
//         () => {
//             isLoading = false
//         });
//     console.log('después de la petición');
// });