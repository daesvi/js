/* Leer 20 números e imprimir cuantos son positivos, 
negativos y neutros, realizar el ejercicio con funciones. */

function positivos(numeros){
    let cont = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > 0){
            cont++;
        }
    }
    document.write(`Se ingresaron ${cont} números positivos <br>`);
}

function negativos(numeros){
    let cont = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] < 0){
            cont++;
        }
    }
    document.write(`Se ingresaron ${cont} números negativos <br>`);
}

function neutros(numeros){
    let cont = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] == 0){
            cont++;
        }
    }
    document.write(`Se ingresaron ${cont} números neutros <br>`);
}

const numeros = [];

for (let i = 0; i < 20; i++){
    numeros[i] = Number(prompt(`Ingrese el ${i+1} número`));
}

positivos(numeros);
negativos(numeros);
neutros(numeros);


