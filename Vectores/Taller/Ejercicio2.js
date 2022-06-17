/* Al ejercicio anterior (Ejercicio 1), 
eiminarle la posición 2 del arreglo con splice. */

const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'];

dias.push('Domingo');

console.log(...dias);
dias.splice(2,1);
console.log(...dias);