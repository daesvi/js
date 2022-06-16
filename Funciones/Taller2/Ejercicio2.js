/* Realizar una función por cada operación suma, 
resta, multiplicación y división (En caso de que 
el divisor sea 0 indicar el problema). */

function suma(numeros){
    numeros.forEach((numero)=>{
        sumaa+=numero;
        return sumaa;
    });
}

function resta(numeros){
    numeros.forEach((numero)=>{
        restaa-=numero;
        return restaa;
    });
}

function multiplicacion(numeros){
    numeros.forEach((numero)=>{
        multi = multi || 1;
        multi *= numero;
        return multi;
    });
}
 function division(numeros){
    for(let i = 0; i < numeros.length; i++){
        divi = numeros[i] / numeros[i+1]
        return divi;
    }
} 

let numeros = [];
let numero, op;
let sumaa = 0;
let restaaa;
let multi;
let divi;

numero = Number(prompt(`¿Cuántos números va a ingresar?`));

for(let i = 1; i <= numero; i++){
    numeros[i-1] = Number(prompt(`Ingrese el ${i} número`));
} 
let restaa = numeros[0];
op = Number(prompt(`Ingrese qué operación desea realizar con los ${numero} números ingresados
\n1. Para suma
\n2. Para resta
\n3. Para multiplicación
\n4. Para división`));

switch (op){
    case 1:
        suma(numeros);
        document.write(`El resultado de la suma es: ${sumaa}`);
    break;
    case 2:  
        resta(numeros);
        let restaaa;
        restaaa = restaa + numeros[0];
        document.write(`El resultado de la resta es: ${restaaa}`); 
    break;
    case 3:
        multiplicacion(numeros);
        document.write(`El resultado de la multiplicación es: ${multi}`);
    break;
    case 4:
        division(numeros);
        document.write(`El resultado de la división es: ${divi}`);
    break;
    default:
        alert(`La opción ingresada no es válida`);
    break;
}
