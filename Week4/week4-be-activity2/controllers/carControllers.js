const mongoose = require('mongoose');
const Car = require('../models/carModel');

// PUT /api/cars/:carId  (full replace)
const putCar = async (req, res) => {
  const { carId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: 'Invalid car ID' });
  }

  // PUT = requiere el recurso completo
  const { model, color, age } = req.body;
  if (model == null || color == null || age == null) {
    return res.status(400).json({
      message: 'PUT requires full resource: model, color, age',
    });
  }

  try {
    const replaced = await Car.findOneAndReplace(
      { _id: carId },
      { model, color, age },
      { new: true, runValidators: true },
    );

    if (!replaced) return res.status(404).json({ message: 'Car not found' });
    return res.status(200).json(replaced);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to replace car' });
  }
};

module.exports = { putCar };
