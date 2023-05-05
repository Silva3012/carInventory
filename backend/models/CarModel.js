const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    // Registration Number
    reg_num: {
        type: String,
        required: true
    },
    // Make of the car (e.g. Mercedes-Benz)
    make: {
        type: String,
        required: true
    },
    // Model of the car (e.g. G63 AMG)
    model: {
        type: String,
        required: true
    },
    // Year of the car
    year: {
        type: Number,
        required: true
    },
    // Color of the car
    color: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;