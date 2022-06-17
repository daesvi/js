/* Realizar una función como parámetro de otra función para saludar a un usuario. */

function saludo (nombre){
    console.log(`¡Hola!. Bienvenido, ${nombre}`);
}

function salu (nombre) {
    saludo(nombre);
}

let nombre = "Daniel";
salu(nombre);