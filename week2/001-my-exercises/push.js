let nextId = 1;
const carArray = [];

function addOne(model, color, age) {
  if (!model || !color || age === undefined || age === null) {
    return false;
  }

  const newCar = {
    id: nextId++,
    model,
    color,
    age
  };

  carArray.push(newCar);
  return newCar;
}

const created = addOne("Toyota", "red", 3);
console.log("Created car:", created);
console.log("All cars:", carArray);