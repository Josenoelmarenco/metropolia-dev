const {add, subtract} = require('./math');

const result1 = add(5,3)
const result2 = subtract(5,3)

console.log(result1);
console.log(result2);

// app.js
const capitalize = require('./utility');
console.log(capitalize('hello')); // 'Hello'

// app.js
const library = require('./library');
library.func1(); // Calling Function 1
library.func2(); 

// app.js
const greet = require('./utility');

console.log(greet('Alice')); // 'Hello, Alice!'