// destructuring.js
const person = { name: 'Alice', age: 30, city: 'New York' };

// En lugar de person.name y person.age, extraemos directo:
const { name, age } = person;

console.log('Nombre:', name);
console.log('Edad:', age);

function greetUser({ name, age }) {
  console.log(`Hello, ${name}! You're ${age} years old.`);
}

greetUser({ name: 'Bob', age: 25 });

function usuarioPago({ name, ciudadOrigen, ciudadDestino }) {
  console.log(
    `Hola, ${name}! Your origen city is ${ciudadOrigen} y tu destino es: ${ciudadDestino}`,
  );
}

usuarioPago({
  name: 'Noel',
  ciudadOrigen: 'Las Vegas',
  ciudadDestino: 'Helsinki',
});
