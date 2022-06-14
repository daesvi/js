/*Calcular el promedio de un estudiante que tiene 7 
calificaciones en la materia Fundamentos de JavaScript. 
*/
let nota, promedio;
let suma = 0;

for (let i = 1; i<=7; i++){
nota = Number(prompt(`Ingrese la ${i} nota`));
suma = suma + nota
}

promedio = suma / 7;

document.write(`El promedio de las calificaciones es de: ${promedio}`); 