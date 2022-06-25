// Hallar el área y el perímetro de un rectángulo. Implementar funciones.

function area(longitud, ancho){
    area_rectangulo = longitud * ancho;
    return area_rectangulo;
}

function perimetro(longitud, ancho){
    perimetro_rectangulo = (longitud * 2) + (ancho * 2);
    return perimetro_rectangulo;
}

let ancho = 8;
let longitud = 14;

console.log('El area del rectánculo es: ',area(longitud,ancho));
console.log('El perímetro del rectánculo es: ',perimetro(longitud,ancho));