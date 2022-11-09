const express = require('express')
const router = express.Router()
const adminController = require('../controller/adminController')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    },
})
const upload = multer({
    storage
})
router.route('/state').post(adminController.createState)
router.route('/district').post(adminController.createDistrict)
router.route('/car').post(upload.single('img'), adminController.createCars)

module.exports = router