/* Crear un arreglo con los siguientes datos array = [10,20,30,40]. 
Recorrerlo con foreach y cada una de sus posiciones multiplicarlas 
por el número 5 e imprimir el resultado por consola. */

const array = [10,20,30,40];
console.log(`Array original: ${array}`);
const resultado = [];
let cont = 0;

array.forEach((numero)=>{
    resultado[cont] = numero * 5;
    cont++;
}); 

console.log(`El resultado del array multiplicado por 5 cada una de sus posiciones es:\n${resultado}`);