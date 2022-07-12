'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Click en el botón ' + thisPromiseCount +'<br/>');

    // Construimos la promesa, con su algoritmo que tardará un tiempo en resolverse o rechazarse
    let promesa = new Promise(
       (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Función ejecutora de la promesa ' + thisPromiseCount + ' <br/>');

            window.setTimeout(
                function() {
                    // En este momento resolvemos la promesa
                    resolve(thisPromiseCount);
                }, Math.random() * 4000 + 1000);
        }
    );

    // Para defnir lo que queremos hacer si la promesa se resuelve, llamamos al método then()
    // y para definir lo que queremos hacer si la promesa se rechaza, llamamos al método catch()
    promesa.then(
        // Log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Código dentro del then de la promesa '+ val +'<br/>');
        })
    .catch(
        // Log the rejection reason
       (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Útlima línea del click '+ thisPromiseCount +'<br/>');
}

$( document ).ready(function() {
    let btn = document.getElementById("btn");
    btn.addEventListener("click",testPromise);    
});
