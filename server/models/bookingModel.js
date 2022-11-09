const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    carDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car'
    },
    time: String,
    paymentType: String,
    user: { type: mongoose.Schema.Types.ObjectId }
})

const bookingModel = mongoose.model('bookings', bookingSchema)

module.exports = bookingModel