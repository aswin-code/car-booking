const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const verifyJWT = require('../middleware/verifyToken')
router.use(verifyJWT)
router.route('/state').get(userController.getAllState)
router.route('/district/:id').get(userController.getAllDistrict)
router.route('/cars/:id').get(userController.getAllCars)
router.route('/car/:id').get(userController.getACar)
router.route('/book').post(userController.bookSlot)

module.exports = router