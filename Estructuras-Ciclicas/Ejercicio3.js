// Leer 10 números e imprimir solamente los números positivos

let numeros;

for (let i = 1; i <= 10; i++){
    numeros = Number(prompt(`Ingrese el ${i} número`));
    if (numeros > 0){
        document.write(`<ul> <li> ${numeros} </li> </ul>`);
    }
}