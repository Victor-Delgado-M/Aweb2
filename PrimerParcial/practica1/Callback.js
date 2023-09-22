
const {  cevicherias, 
} = require('./Arrreglo');

//3. Definir una función con Callback que reciba como parámetro su arreglo de elementos y un ID y devuelva el objeto correspondiente, luego mostrarlo por consola usando el callback.

//definimos la funcion que pase un id y un conjunto de datos
function getCevicheriasPorId(id, datos, callback  ){
   //almacenanos la cevicherìa si el id pasado que recibimos coincide con el id de la ceviecherìa
    const  cevicheria = datos.find(( cevicheria)=>  cevicheria.id===id );
    ( cevicheria )
    ? callback( null, cevicheria ) 
    : callback(`cevicheria not found with id ${id}`); 
}

//permite manejar los mensajes si ha sido encontrado o no encontrado la cevichería
function mostrarCevicheria(err, cevicheria) {
    if (err) {
      console.error(err);
    } else {
      console.log("Cevichería encontrada:", cevicheria);
    }
  }
  
  //llamamos a la funcion
  getCevicheriasPorId(6,cevicherias, mostrarCevicheria);

//exportamos
  module.exports = {
    getCevicheriasPorId,
  }

