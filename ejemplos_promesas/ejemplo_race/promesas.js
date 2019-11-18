$( document ).ready(function() {
    
    var p1 = new Promise( (resolve, reject) => { 
        setTimeout(resolve, 500, "uno"); 
    });
    var p2 = new Promise( (resolve, reject) => { 
        setTimeout(resolve, 100, "dos"); 
    });

    Promise.race([p1, p2]).then( value => {
        console.log('Resolved:',value);
        // Ambas se resuelven, pero la p2 antes.
    });

    // Ejemplo con un resolve y un reject en el mismo método race.
    var p3 = new Promise( (resolve, reject) => { 
        setTimeout(resolve, 100, "tres");
    });
    var p4 = new Promise( (resolve, reject) => { 
        setTimeout(reject, 500, "cuatro"); 
    });

    Promise.race([p3, p4]).then( value => {
        console.log('Resolved:',value); 
        // p3 es mas rápida, así que se resuelve el race con p3
    }, reason => {
        console.log('Rejected:',reason);
        // No es llamado
    });

    var p5 = new Promise( (resolve, reject) => { 
        setTimeout(resolve, 500, "cinco"); 
    });
    var p6 = new Promise( (resolve, reject) => { 
        setTimeout(reject, 100, "seis");
    });

    Promise.race([p5, p6]).then( value => {
        console.log('Resolved:',value);
        // No es llamado
    }, reason => {
        console.log('Rejected:',reason);
        // p6 es mas rápida, así que se rechaza
    });


});

