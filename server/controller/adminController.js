const stateModel = require('../models/stateModel')
const districtModel = require('../models/districtModel')
const carsModel = require('../models/carsModel')
exports.createState = async (req, res) => {
    try {
        const { state } = req.body;
        const newState = new stateModel({ state })
        await newState.save()
        res.status(201).json({ message: "state added success full" })
    } catch (error) {
        console.log(error)
    }
}
exports.createDistrict = async (req, res) => {
    try {
        const { district, state } = req.body
        const newDistrict = new districtModel({ district, state })
        await newDistrict.save()
        console.log(newDistrict)
        res.status(201).json({ message: 'district created successfuly' })
    } catch (error) {
        console.log(error)
    }
}
exports.createCars = async (req, res) => {
    try {
        const img = req.file.filename
        console.log(img)
        const { district, car, model, price, carType, owner, } = req.body
        const newCar = new carsModel({ district, car, model, carType, owner, price, image: img })
        console.log(newCar)
        await newCar.save()
        res.status(201).json({ message: 'car created successfuly' })

    } catch (error) {
        console.log(error)
    }
}
