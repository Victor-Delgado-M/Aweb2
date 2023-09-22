
//se importa el array de datos 

const {  cevicherias, 
} = require('./Arrreglo');


// 2.Recorrer y mostrar 3 veces los elementos de su arreglo de objetos aplicando 3 instrucciones para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of.

//el forEach recibe un array para recorrerlo en un parametros
console.log("*RESULTADO DEL FOREACH* \n") 
cevicherias.forEach(i => {

    console.log(i)
});

console.log("*RESULTADO DEL for of* \n") 
//se aplica el ciclo for para indicarle el array y almacenarlo dentro de una variable
for (const cevicheria of cevicherias)
 {

     console.log(cevicheria);
 }

 console.log("*RESULTADO DEL FOR IN* \n") 
 //se activa el tipo llave valor el usar el for in
for (const key in cevicherias) {
 if (cevicherias.hasOwnProperty.call(cevicherias, key)) {
     
     const c = cevicherias[key];
     //se imprime por consola
  
     console.log(c)
 }
}


