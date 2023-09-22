import { cevicherias  } from './arreglo'
import './style.css'}
// creando interfaz del arreglo cevicheria 
interface Cevicheria {
  id: Number;
  nombre: string;
  direccion: string;
  ruc: string;
  slogan: string;
  horario: string;
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