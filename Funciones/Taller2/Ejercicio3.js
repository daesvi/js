/* Realizar una función que calcule el promedio de dos notas. */

function promedio (nota1, nota2) {
    prom = (nota1 + nota2) / 2;
    return prom;
}

let nota1 = 5;
let nota2 = 3;

promedio(nota1, nota2);
console.log(`El promedio de las notas ${nota1} y ${nota2} es: ${prom}`);

