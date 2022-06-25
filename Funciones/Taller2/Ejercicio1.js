/* Realizar una función como parámetro de otra función para saludar a un usuario. */

function saludo (salu){
    document.write(`¡Hola!. Bienvenido, ${nombre}`);
}

function salu () {
    nombre = prompt('Ingrese su nombre');
    saludo(salu);
}

let nombre;
salu();