const Car = require('../models/CarModel');

// CREATE a new car
exports.createCar = async (req, res) => {
  try {
    const { reg_num, make, model, year, color, owner } = req.body;

    const car = await Car.create({ reg_num, make, model, year, color, owner });

    res.status(201).json({ car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// READ all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json({ cars });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// READ a single car by ID
exports.getCarById = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({ car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// UPDATE a car by ID
exports.updateCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const { reg_num, make, model, year, color, owner } = req.body;

    const car = await Car.findByIdAndUpdate(
      id,
      { reg_num, make, model, year, color, owner },
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({ car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// // UPDATE information about multiple cars
exports.updateMultipleCars = async (req, res) => {
  try {
    const { filter, update } = req.body;

    const result = await Car.updateMany(filter, update);

    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// DELETE a car by ID
exports.deleteCarById = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await Car.findByIdAndDelete(id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Listing model, make, registration number, and current owner for all cars older than 5 years:
exports.listOlderThanFiveYears = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();

    const cars = await Car.find({ year: { $lt: currentYear - 5 } }).select(
      "model make reg_num owner"
    );

    res.json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};


/*
Here we defined controller functions for creating, reading, updating, and deleting cars in the database. 
Each function takes the req and res objects as parameters and returns an appropriate response to the client.
*/