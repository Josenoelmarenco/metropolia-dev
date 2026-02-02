//Creamos la lista que tendrá los carros
const listaDeCarros = [];
let idCar = 1;

//Fn to add car to list
function agregandoCar(modelo, color, año) {
  //Validamos que los parámetros ingresados sean correctos
  if (model == null || color == null || año == null) {
    console.error("Parámetros ingresados incorrectos");
    return false;
  }
  //Verificamos si alguno de los parámetros no está vacío
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
  // el nuevo carro ingresado en la variable nuevoCarro lo ingresamos al array
  listaDeCarros.push(nuevoCarro);
  return nuevoCarro;
}
//Buscamos carro:
function findById(id) {
  const numeroDelId = Number(id);
  return listaDeCarros.find((item) => item.id === numeroDelId);
}
