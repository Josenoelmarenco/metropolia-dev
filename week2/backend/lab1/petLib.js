/* // The data model for pet is as follows
{
    "name": "Buddy",
    "species": "Dog",
    "age": 1,
    "color": "Brown",
    "weight": 2
  }
 */
let petArray = [];

let nextId = 1;

function getAll() {
  return petArray;
}

console.log("getAll called:", getAll());

function addOne(name, species, age, color, weight) {
  // Check if any parameter is empty or undefined
  if (!name || !species || !age || !color || !weight) {
    return false;
  }

  const newPet = {
    id: nextId++,
    name: name,
    species,
    species,
    age, //when is the same name key and value, no need add name
    color,
    weight,
  };
  nextId = nextId + 1;
  petArray.push(newPet);
  return newPet;
}
function findById(id) {
  const pet = petArray.find((idem) => item.id == id);
}

console.log("getAll called before adding pets:", getAll());

let result1 = addOne("Buddy", "Dog", 3, "Brown", 20);
let result2 = addOne("Hugo", "cat", 2, "Brown", 2);
console.log("result1", result1);
console.log("result2", result2);
