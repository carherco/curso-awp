self.addEventListener('sync', function(event) {
  console.log("Sync event fired!");
  self.registration.showNotification("Sync event fired!");
});
