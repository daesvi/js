/* En un almacén se hace un 20% de descuento a los clientes 
cuya compra supere los $100.000 ¿Cuál será la cantidad que 
pagará una persona por su compra? */

let valor_compra = 120000;
let descuento, total;

if(valor_compra > 100000) {
    descuento = (valor_compra * 20) / 100;
    total = valor_compra - descuento;
    console.log(`El descuento es de: ${descuento}`);
}

console.log(`El total a pagar es: ${total}`);