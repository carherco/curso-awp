self.addEventListener('push', function(event) {
  console.log('push!!!');
  var payload = event.data.json();
  //...
  var options = { };
  event.waitUntil(
    self.registration.showNotification('Título',options)
  );

});

