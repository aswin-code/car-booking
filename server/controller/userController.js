
const carsModel = require('../models/carsModel')
const districtModel = require('../models/districtModel')
const stateModel = require('../models/stateModel')
const bookingModel = require('../models/bookingModel')
exports.getAllState = async (req, res) => {
    try {
        const states = await stateModel.find({})
        res.status(200).json({ states })
    } catch (error) {
        console.log(error)
    }
}
exports.getAllDistrict = async (req, res) => {
    try {
        const state = req.params.id
        const districts = await districtModel.find({ state })
        console.log(districts)
        res.status(200).json({ districts })
    } catch (error) {
        console.log(error)
    }
}

exports.getAllCars = async (req, res) => {
    try {
        const district = req.params.id
        const cars = await carsModel.find({ district })
        console.log(cars)
        res.status(200).json({ cars })
    } catch (error) {
        console.log(error)
    }
}

exports.bookSlot = async (req, res) => {
    try {
        const { car, time, paymentType } = req.body
        const user = req.user
        const foundCar = await carsModel.findById(car)
        const newBooking = new bookingModel({ carDetails: car, paymentType, user })
        foundCar.booked = true;
        await foundCar.save()
        await newBooking.save()
        res.status(201).json({ message: "car booked successfully" })
        console.log(newBooking)

    } catch (error) {
        console.log(error)
    }
}
exports.getACar = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const car = await carsModel.findById(id)
        console.log(car)
        res.status(200).json(car)
    } catch (error) {
        console.log(error)
    }
}