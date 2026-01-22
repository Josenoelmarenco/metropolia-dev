// 1. Iniciamos el arreglo vacío donde guardaremos los TODOs
let todosArray = [];

// 2. Variable auxiliar para generar IDs únicos (empezamos en 1)
let nextId = 1;

// --- FUNCIONES ---

// GET ALL: Devuelve toda la lista
function getAll() {
  return todosArray;
}

// ADD ONE: Crea un nuevo Todo
function addOne(task, completed, dueDate) {
  // Verificamos que al menos venga la tarea
  if (!task) {
    return false;
  }

  const newTodo = {
    id: nextId.toString(), // Generamos un ID simple y lo convertimos a texto
    task: task,
    completed: completed,
    dueDate: dueDate,
  };

  nextId++; // Preparamos el ID para el siguiente
  todosArray.push(newTodo); // Lo guardamos en el arreglo
  return newTodo; // Devolvemos el objeto creado
}

// FIND BY ID: Busca un Todo específico
function findById(id) {
  // Usamos .find() de JavaScript para buscar en el arreglo
  const todo = todosArray.find((item) => item.id == id);
  return todo || false; // Si lo encuentra lo devuelve, si no, devuelve false
}

// UPDATE ONE BY ID: Actualiza un Todo existente
function updateOneById(id, updatedData) {
  const todo = findById(id);

  if (todo) {
    // Solo actualizamos si el dato viene en "updatedData"
    if (updatedData.task) {
      todo.task = updatedData.task;
    }
    // Para booleanos (true/false) preguntamos si es distinto de undefined
    if (updatedData.completed !== undefined) {
      todo.completed = updatedData.completed;
    }
    if (updatedData.dueDate) {
      todo.dueDate = updatedData.dueDate;
    }
    return todo; // Devolvemos el todo actualizado
  }
  return false; // Si no existía el ID, devolvemos false
}

// DELETE ONE BY ID: Borra un Todo
function deleteOneById(id) {
  const todo = findById(id);

  if (todo) {
    // Filtramos el arreglo para quedarnos con todos MENOS el que queremos borrar
    const initialLength = todosArray.length;
    todosArray = todosArray.filter((item) => item.id != id);

    // Verificamos si realmente se borró algo
    return todosArray.length < initialLength;
  }
  return false;
}

// Código para pruebas internas (opcional)
if (require.main === module) {
  console.log("getAll called:", getAll());
  console.log("addOne called:", addOne("Comprar leche", false, "2025-08-30"));
  console.log("getAll called after add:", getAll());
}

// Exportamos las funciones para usarlas en los Handlers
const ToDos = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = ToDos;
