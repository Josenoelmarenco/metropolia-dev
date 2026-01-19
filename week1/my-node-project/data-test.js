// Importamos solo la función "format" de la librería
const { format } = require('date-fns');

// Creamos una fecha con el momento actual
const hoy = new Date();

// Usamos la librería para darle un formato legible
// Patrones: yyyy (año), MM (mes), dd (día), HH (hora), mm (minuto), ss (segundo)
const fechaFormateada = format(hoy, 'yyyy-MM-dd HH:mm:ss');

console.log(`La fecha sin formato es horrible: ${hoy}`);
console.log(`La fecha con date-fns es hermosa: ${fechaFormateada}`);