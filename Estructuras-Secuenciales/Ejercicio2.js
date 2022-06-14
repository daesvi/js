/* Un maestro desea saber qué porcentaje de hombres
y que porcentaje de mujeres hay en un grupo de 
estudiantes, si suponemos que en la clase hay en total 
18 mujeres y 15 hombres. */

let mujeres = 18;
let hombres = 15;
let total_estudiantes, porcentaje_h, porcentaje_m;

total_estudiantes = mujeres + hombres;
porcentaje_h = hombres / total_estudiantes * 100;
porcentaje_m = mujeres / total_estudiantes * 100;

// No sé como quitar decimales para que no quede el porcentaje tan largo
console.log(`El porcentaje de hombres es de: ${porcentaje_h}%`);
console.log(`El porcentaje de mujeres es de: ${porcentaje_m}%`);