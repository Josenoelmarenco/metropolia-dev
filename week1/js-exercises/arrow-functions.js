//Scenario 1: Basic Function: Refactor a simple function with no parameters and a single-line return statement:
function sayHello(){
    return 'Hello, word!';
}
//solution
const sayHelloArrow = () => 'Hello, world!';

//Scenario 2: Single Parameter: Refactor a function with a single parameter:
//Regular function
function double(x){
    return x * 2;
}
//solution
const doubleSingle = x => x*2;

//Scenario 3: Multiple Parameters: Refactor a function with multiple parameters:
//Regular function
function add(x, y){
    return x + y;
}

//solution
const addArrow = (x, y) => x + y;

//Scenario 4: Function Inside an Object: Refactor a function defined inside an object:
// Regular function
const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

// solution incorrecto:
const personArrow = {
    name: 'Alice',
    sayHi: () => `Hi, ${this.name} !`
};

//solution correct:
const person2 = {
    name: "Alice",
    // Sintaxis moderna (Method Shorthand)
    sayHi() {
        return `Hi, ${this.name}!`;
    }
};

//Scenario 5: Refactor a callback function passed to the map method:
const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function(num) {
  doubled.push(num * 2);
});

//solution
const numbers2 = [1,2,3,4,5];
const doubledNumbers2 = [];

numbers.forEach(num => doubledNumbers2.push(num * 2)); //[2, 4, 6, 8, 10]