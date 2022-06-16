/* Crear una función que imprima por consola el 
nombre, edad y estatura de un objeto persona. */

function datos (persona){
    console.log(Object.values(persona));
}

const persona = {
    nombre: 'Daniel',
    edad: '17',
    estatura: '1.97'
};

datos(persona);