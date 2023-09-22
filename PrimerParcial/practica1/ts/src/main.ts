import { cevicherias  } from './arreglo'
import './style.css'
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'

// import {  bulbasaur } from './bases/02-objects'

// Definición de tipo para los elementos del arreglo
interface Cevicheria {
  nombre: string;
  direccion: string;
}

console.log("*RESULTADO DEL FOREACH* \n");
cevicherias.forEach((cevicheria: Cevicheria) => {
  console.log(cevicheria);
});

console.log("*RESULTADO DEL for of* \n");
for (const cevicheria of cevicherias) {
  console.log(cevicheria);
}

console.log("*RESULTADO DEL FOR IN* \n");
for (const key in cevicherias) {
  if (cevicherias.hasOwnProperty(key)) {
    const c = cevicherias[key];
    console.log(c);
  }
}