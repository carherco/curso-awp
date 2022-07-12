function getUsers() {
    return fetch('https://reqres.in/api/users').then( 
        respuesta => respuesta.json()
    );
}

$( document ).ready(function() {
    console.log('Antes de la petición');
    
    getUsers().then(
        users => console.log(users)
    );
    
    console.log('después de la petición');
});

// $( document ).ready(async function() {
//     console.log('Antes de la petición');
    
//     const users = await getUsers();
//     console.log(users);
    
//     console.log('después de la petición');
// });