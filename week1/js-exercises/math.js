// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// AQUÍ está la clave: Le damos permiso a otros archivos para usar estas funciones
module.exports = { add, subtract };

//ahora exportemos esta parte del código