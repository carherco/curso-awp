'use strict';
let miPrimeraPromesa = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("Success!"); 
  }, 2000);
});

$( document ).ready(function() {
  if ("Promise" in window) {
    miPrimeraPromesa.then(function(data) {
        console.log(data);
    });
  } else {
    alert("Tu navegador no soporta Promesas.");
  }
  console.log('otro código');  
});
