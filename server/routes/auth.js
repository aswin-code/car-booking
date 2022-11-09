const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
//login

router.route('/login')
    .post(authController.login)

router.route('/register')
    .post(authController.register)

router.route('/logout').post(authController.logout);

module.exports = router