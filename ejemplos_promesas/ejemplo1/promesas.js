'use strict';

let miPrimeraPromesa = new Promise((resolve, reject) => {
  console.log('Función ejecutora');
  // resolve("Success!");
  setTimeout(function(){
    resolve("Success!"); 
  }, 2000);
});

miPrimeraPromesa.then(function(data) {
    console.log("Dentro del then: ", data);
});

console.log('otro código');  

