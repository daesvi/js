/* Dado un objeto carro con las siguientes propiedades, 
indicar si es camioneta, dado que esta tiene 5 puertas o 
si es Turismo (diferente de 5). */

const carro = {
    color: 'blanco',
    traccion: '4x4',
    llantas: '4',
    puertas: '5',
    marca: 'Renault'
};

if (carro.puertas == 5) {
    console.log('Es camioneta');
}else{
    console.log('Es turismo');
}