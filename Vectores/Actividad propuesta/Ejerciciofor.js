/* Dado el siguiente vector [0,1,1,2,3,5,8,13,21]
Determinar
    1. Suma total
    2. Promedio
    3. Numero más alto
    4. Número más bajo
    5. Cantidad de números pares
    6. Cantidad de números impares
Utilizando un un recorrido común y con forEach */

// Ejercicio con for

let suma = 0;
let cont = 0;
let sumap = 0;
let sumai = 0;
let promedio, max, min;
const numeros = [0,1,1,2,3,5,8,13,21];

for (let i = 0; i < numeros.length; i++){
    suma+=numeros[i];
    cont++;
    if (numeros[i]%2==0){
        sumap++;
    }else{
        sumai++;
    }
}

promedio = suma / cont;
max = Math.max(...numeros);
min = Math.min(...numeros);
console.log(`La suma es: ${suma}`);
console.log(`El promedio es: ${promedio}`);
console.log(`El número más alto del array es: ${max}`);
console.log(`El número más bajo del array es: ${min}`);
console.log(`La cantidad de números pares son: ${sumap}`);
console.log(`La cantidad de números impares son: ${sumai}`);