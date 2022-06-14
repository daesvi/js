/* Determinar si un estudiante aprueba o reprueba un 
curso, sabiendo que aprobará si su promedio de tres 
calificaciones es mayor o igual a 3; reprueba en caso 
contrario. */

let nota1 = 3;
let nota2 = 5;
let nota3 = 1;
let promedio;

promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 3){
    console.log(`El estudiante ha aprobado con un promedio de ${promedio}`);
}else{
    console.log(`El estudiante ha reprobado con un promedio de ${promedio}`);
}