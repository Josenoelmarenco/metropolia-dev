const {add, subtract} = require('./math');

console.log(add(5,4));
 console.log(subtract(5,4));

 // app.js
const library = require('./library');
library.func1(); // Calling Function 1
library.func2(); 

// app.js
// Nota: Como es una exportación por defecto, tú le pones el nombre que quieras aquí.
// Podrías llamarlo 'saludar' si quisieras, pero usaremos 'greet' para seguir el ejemplo.
const saludar = require('./utility');

console.log(saludar('Alice')); // Debería imprimir: 'Hello, Alice!'