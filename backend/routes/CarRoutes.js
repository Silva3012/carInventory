//Here we create an instance of the express.Router object and define a route for each of our controller functions.

const express = require('express');
const router = express.Router();
const { 
  createCar, 
  getAllCars, 
  updateCarById, 
  getCarById,
  deleteCarById,
  updateMultipleCars,
  listOlderThanFiveYears 
} = require('../controllers/CarControllers');

// CREATE a new car
router.post('/cars', createCar);

// READ all cars
router.get('/cars', getAllCars);

// UPDATE a car by ID
router.put('/cars/:id', updateCarById);

// DELETE a car by ID
router.delete('/cars/:id', deleteCarById);

// UPDATE information about multiple cars
router.patch('/cars/multiple', updateMultipleCars);

// Listing model, make, registration number, and current owner for all cars older than 5 years:
router.get('/cars/olderThanFiveYears', listOlderThanFiveYears);

// READ A CAR BY ID
router.get('/cars/:id', getCarById);

// Export to use in server.js
module.exports = router;
