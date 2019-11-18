self.addEventListener('push', function(event) {
  console.log('push!!!');
  var payload = event.data.text();
  //...
  var options = { };
  event.waitUntil(
    self.registration.showNotification('Título: ' + payload, options)
  );

});

