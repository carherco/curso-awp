var cache_version = 'v1';
var db_name = 'dbName';
var db;


function createDB() {
  var request = indexedDB.open('dbName',1);

  request.onsuccess = function(event) {
    console.log('[onsuccess]', request.result);
    db = event.target.result; // === request.result
  };

  request.onerror = function(event) {
    console.log('[onerror]', request.error);
  };

  request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var store = db.createObjectStore('pendingMessages', {keyPath: 'id'});
  };
}





this.addEventListener('activate', event => {
  if(self.IndexedDB){
    event.waitUntil(createDB());
  }
});



this.addEventListener('fetch', function(event) {
  if(!navigator.onLine) {
    event.respondWith(new Response('<h1>Estás sin conexión</h1>', {headers: { 'Content-Type': 'text/html'}}));

  } else {
    //event.respondWith(fetch(event.request));
  }
});

this.addEventListener('sync', function(event) {
  console.log('sync');
  self.registration.showNotification("Sync event fired!");
  var transaction = db.transaction(db_name, 'readonly');
  var objectStore = transaction.objectStore('pendingMessages');
  objectStore.getAll().onsuccess = function(event) {
    logTimestamps(event.target.result);
  };
});
