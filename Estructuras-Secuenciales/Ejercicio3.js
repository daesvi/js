/* Una tienda ofrece un descuento del 15% sobre el total de la compra 
y un cliente desea saber:

1. ¿Cuánto es el descuento?
2. ¿Cuánto es el valor bruto?
3. ¿Cuánto deberá pagar por su compra? */

let valor_compra = 50000;
let descuento, total;

descuento = (valor_compra * 15) / 100;
total = valor_compra - descuento;

console.log(`El descuento del 15% es: ${descuento}`);
console.log(`El valor bruto es: ${valor_compra}`);
console.log(`El total a pagar aplicando el descuento de ${descuento} es: ${total}`);
