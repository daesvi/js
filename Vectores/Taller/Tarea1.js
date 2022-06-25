/* Crear un arreglo (temática libre), el cual 
sea recorrido con la función map() e imprimir 
por consola cada uno de sus elementos. */

const array = ['Daniel','Joseph','Samuel','Viviana'];

let new_array = array.map(function(element){
    return element;
});

console.log(new_array);