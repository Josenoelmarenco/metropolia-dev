{
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2025-08-30"
}

//get all
function getAll() {
    return todosArray;
}

if (require.main === module) {
    console.log("getAll called:", getAll());
}
//export
const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;