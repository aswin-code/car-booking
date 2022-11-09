const mongoose = require('mongoose')

const carsSchema = mongoose.Schema({
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'district'
    },
    car: String,
    model: String,
    price: String,
    carType: String,
    image: String,
    owner: String,
    booked: {
        type: Boolean,
        default: false
    }
})
const carsModel = mongoose.model('cars', carsSchema)
module.exports = carsModel