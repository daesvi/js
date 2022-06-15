/* Almacene números en una matriz, para obtener:
- El mayor los pares y menor de los impares. */
let pares =[];
let cont = 0;
let impares =[];
const numeros = [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10, 11, 12]];
for (let i = 0; i < numeros.length; i++){
    for (let k = 0; k < numeros[i].length; k++){
        if (numeros[i][k]%2==0){
            pares[cont] = numeros[i][k];
            cont++;
        }else{
            impares[cont] = numeros[i][k];
        }
    }
}

max = Math.max(...pares);
min = Math.min(...impares);

console.log(`La matriz inicial es: ${numeros}`)
console.log(`Los numeros pares son: ${pares}`);
console.log(`Los numeros impares son: ${impares}`);
console.log(`El número mayor de los pares es: ${max}`);
console.log(`El número menor de los impares es: ${min}`);
