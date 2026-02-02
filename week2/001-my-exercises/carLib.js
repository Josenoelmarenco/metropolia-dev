const carList = [];
let idCar = 1;

//Fn to add car to list
function addCar(model, color, age) {
  if (model == null || color == null || age == null) {
    console.error("Faltan datos obligatorios");
    return false;
  }
  //Verificamos si no está vacío
  if (model.trim() === "" || color.trim() === "") {
    return false;
  }
  //Ahora, el que sea true entra en el array
  const nuevoCarro = {
    id: idCar++,
    model,
    color,
    age,
  };

  carList.push(nuevoCarro);
  return nuevoCarro;
}
//Buscamos carro:
function findById(id) {
  //creamos la función y le decimoso que espere el id
  const numId = Number(id); //convertimos el url de txt a num
  return carList.find((item) => item.id === numId) || false; //Ahora sí aplicamos el find y lo retornamos
}
//Ingresamos carros a la lista
addCar("Toyota", "Rojo", 4);
addCar("Kia", "Rojo", 4);
addCar("Honda", "Rojo", 4);
addCar("Yamaha", "Rojo", 4);
addCar("Is", "Rojo", 4);
addCar("Mat", "Rojo", 4);

console.log(carList);
console.log(findById(1));
