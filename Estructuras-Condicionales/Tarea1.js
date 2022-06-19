/* Un obrero necesita calcular su salario semanal, 
el cual se obtiene de la siguiente manera:
- Si trabaja 40 horas o menos se le paga $16 por hora
- Si trabaja más de 40 horas se le paga $16 por cada una 
de las primeras 40 horas y $20 por cada hora extra. */

let salario, horas_trabajadas, extra;

horas_trabajadas = Number(prompt('Ingrese las horas trabajadas'));

if (horas_trabajadas <= 40){
    salario = horas_trabajadas * 16;
}else{
    extra = horas_trabajadas - 40;
    extra = extra * 20;
    horas_trabajadas = 40 * 16;
    salario = horas_trabajadas + extra;
}

document.write(`El salario semanal es de: ${salario}$`);