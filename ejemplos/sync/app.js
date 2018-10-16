window.addEventListener('load',function(){
    var logEl = document.querySelector('.log');
    function log(msg) {
      var p = document.createElement('p');
      p.textContent = msg;
      logEl.appendChild(p);
      console.log(msg);
    }

    navigator.serviceWorker.register('/carlos/curso-awp/ejemplos/sync/sw.js').then(function(reg) {
      return reg.sync.getTags();
    }).then(function(tags) {
      if (tags.includes('syncTest')) log("There's already a background sync pending");
    }).catch(function(err) {
      log('It broke (probably sync not supported or flag not enabled)');
      log(err.message);
    });

    document.querySelector('.register').addEventListener('click', function(event) {
      event.preventDefault();
      console.log('click');

      new Promise(function(resolve, reject) {
        Notification.requestPermission(function(result) {
          if (result !== 'granted') return reject(Error("Denied notification permission"));
          resolve();
        })
      }).then(function() {
        return navigator.serviceWorker.ready;
      }).then(function(reg) {
        return reg.sync.register('syncTest');
      }).then(function() {
        log('Sync registered');
      }).catch(function(err) {
        log('It broke');
        log(err.message);
      });
    });

    window.onerror = function(msg) {
      log(msg);
    };
});