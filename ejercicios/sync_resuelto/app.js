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
var next_id = 1;

//window.addEventListener('load',function(){
  

$(function(){

  navigator.serviceWorker.register('/carlos/curso-awp/ejercicios/sync_resuelto/sw.js').then(function(reg) {
    return reg.sync.getTags();
  }).then(function(tags) {
    if (tags.includes('syncTest')) console.log("There's already a background sync pending");
  }).catch(function(err) {
    console.log(err.message);
  });

  var DBOpenRequest = window.indexedDB.open(db_name, 7);

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

    console.log('click');
    navigator.serviceWorker.ready.then(function(reg) {
      console.log('sw ready');
      return reg.sync.register('syncTest');
    }).then(function() {
      console.log('Sync registered');
    }).catch(function(err) {
      console.log('It broke');
      console.log(err.message);
    });



    if($('#text_message').val()) {

      if(navigator.onLine) {
        $.post('post_message.json',$('#text_message').val()).then(function(response){
          let prev_content = $('#messages').html();
          let new_content = prev_content + '<li>'+$('#text_message').val()+'</li>'
          $('#messages').html(new_content);
          $('#text_message').val('');
        });
      } else { 
        navigator.serviceWorker.ready.then(function(reg) {
          return reg.sync.register('syncTest');
        }).then(function() {
          log('Sync registered');
        }).catch(function(err) {
          log('It broke');
          log(err.message);
        });
        var newMessage = { id: next_id++, message: $('#text_message').val()};

        // Inicia una transacción de lectura/escritura db transaction, lista para agregar los datos
        var transaction = db.transaction(["pendingMessages"], "readwrite");

        // Crea una almacén de objetos en la transacción
        var objectStore = transaction.objectStore("pendingMessages");

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
