$( document ).ready(function() {
    
    var p1 = new Promise((resolve, reject) => { 
        setTimeout(resolve, 4000, 'una'); 
    }); 

    var p2 = new Promise((resolve, reject) => { 
        setTimeout(resolve, 1000, 'dos'); 
    });

    var p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, 'tres');
    });

    var p4 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'cuatro');
    });

    var p5 = new Promise((resolve, reject) => {
        reject("promesa 5 fallida");
        //resolve("promesa 5 ha ido bien");
    });

    Promise.all([p1, p2, p3, p4, p5]).then(values => { 
        console.log(values);
    }, reason => {
        console.log(reason)
    });
});


// https://javascript.info/promise-chaining

