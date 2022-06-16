/* Crea una función que reciba 2 parámetros, 
precio e iva, y devuelva el precio con iva incluido. 
Si no recibe el iva, aplicará el 21 por ciento por defecto. */

function ivaa (precio,iva){
    iva = iva || 21;
    totiva = (precio * iva) / 100;
    total = precio + totiva;
    return total;
}

let precio, iva,total,totiva;

precio = Number(prompt("Ingrese el precio del producto"));
iva = Number(prompt("Ingrese el porcentaje de iva del producto"));

if (iva > 0 ) {
    ivaa(precio,iva);
    document.write(`Precio con el iva del ${iva}% es: ${total}`);
}else{
    ivaa(precio);  
    document.write(`Precio con el iva del 21% es: ${total}`);
}

