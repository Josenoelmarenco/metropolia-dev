const Car = require("./carLib");

//2. Este fragmento define un controlador para el GET /carspunto final, que recupera todos los automóviles:
const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
};

// 3. Este fragmento define un controlador para el POST /carspunto final, que crea un nuevo automóvil:
const createCar = (req, res) => {
  const { model, color, age } = req.body;

  const newCar = Car.addOne(model, color, age);

  if (newCar) {
    res.json(newCar);
  } else {
    res.status(500).json({ message: "Failed to create car" });
  }
};

//4. Este fragmento define un controlador para el GET /cars/:carIdpunto final, que recupera un automóvil por su ID:
const getCarById = (req, res) => {
  const carId = req.params.carId;
  const car = Car.findById(carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
};

//5. Este fragmento define un controlador para el PUT /cars/:carIdpunto final, que actualiza los detalles de un automóvil:
const updateCar = (req, res) => {
  const carId = req.params.carId;

  const { model, color, age } = req.body;

  const updatedCar = Car.updateOneById(carId, { model, color, age });

  if (updatedCar) {
    res.json(updatedCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

//6. Este fragmento define un controlador para el DELETE /cars/:carIdpunto final, que elimina un automóvil por su ID:
const deleteCar = (req, res) => {
  const carId = req.params.carId;

  const isDeleted = Car.deleteOneById(carId);

  if (isDeleted) {
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

//7. Por último, debes exportar los controladores para que se puedan utilizar en otras partes de la aplicación:
module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};