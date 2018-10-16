if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/carlos/curso-awp/ejercicios/sync/sw.js')
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

function syncIfNeeded(event) {
  //
}

function switchToOffline(event) {
  //
}

window.addEventListener('online', syncIfNeeded);
window.addEventListener('offline', switchToOffline);

var db_name = 'dbName';
var db;
var store;

$(function(){

  var DBOpenRequest = window.indexedDB.open(db_name, 5);

  DBOpenRequest.onsuccess = function(event) {
    console.log('[onsuccess]', DBOpenRequest.result);
    db = event.target.result; 
  };
  DBOpenRequest.onerror = function(event) {
    console.log('[onerror]', DBOpenRequest.error);
  };

  DBOpenRequest.onupgradeneeded = function(event) {
    var db = event.target.result;
    store = db.createObjectStore('pendingMessages', {keyPath: 'id'});
  };

  $('#submit_button').click(function(event){
    if($('#text_message').val()) {

      if(navigator.onLine) {
        $.post('post_message.json',$('#text_message').val()).then(function(response){
          let prev_content = $('#messages').html();
          let new_content = prev_content + '<li>'+$('#text_message').val()+'</li>'
          $('#messages').html(new_content);
          $('#text_message').val('');
        });
      } else { 
        var newMessage = { message: $('#text_message').val()};

        // Inicia una transacción de lectura/escritura db transaction, lista para agregar los datos
        var transaction = db.transaction(["pendingMessages"], "readwrite");

        // Crea una almacén de objetos en la transacción
        var objectStore = transaction.objectStore(store);

        // Agrega nuestro objeto newItem al almacén de objetos
        var objectStoreRequest = objectStore.add(newMessage);

        objectStoreRequest.onsuccess = function(event) {
          //Informa sobre el éxito de nuestro nuevo elemento en la base de datos
          console.log('Elemento añadido');
          $('#text_message').val('');
        };

      }
    }
    
  });
});