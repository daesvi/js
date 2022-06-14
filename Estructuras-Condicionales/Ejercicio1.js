/* Un hombre desea saber cuánto dinero se genera por 
concepto de intereses sobre la cantidad que tiene en 
inversión en el banco.
El decidirá reinvertir los intereses siempre y cuando 
estos excedan a $7000, y en ese caso desea saber cuánto 
dinero tendrá finalmente en su cuenta. */

let capital = 5000000;
let porcentaje_int = 0.2;
let intereses;

intereses = capital * porcentaje_int;

if (intereses > 7000) {
    capital = capital + intereses;
    console.log(`El dinero final es: ${capital}`);
}
console.log(`La cantidad de intereses son: ${intereses}`);