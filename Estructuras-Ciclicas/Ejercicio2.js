// Leer 10 números y obtener su cubo y su cuarta 

let numeros;

for (let i = 1; i <= 10; i++){
    numeros = Number(prompt(`Ingrese el ${i} número`));
    let num3 = (Math.pow(numeros,3));
    let num4 = (Math.pow(numeros,4));
    document.write(`<ul> <li> ${numeros} al cubo es: ${num3} y a la cuarta es: ${num4}</li> </ul>`);
}