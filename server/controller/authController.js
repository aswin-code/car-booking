const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('../utils/nodemailer')
const token = require('../utils/Token');


// register 
exports.register = async (req, res) => {
    try {
        const { email, name, password } = req.body
        if (!email || !password) return res.status(400).json({ message: 'All fields are required' })
        const foundUser = await userModel.findOne({ email })
        console.log(foundUser)
        if (foundUser) return res.status(403).json({ message: 'User already exist' })
        const hash = await bcrypt.hash(password, 10)
        const newUser = new userModel({ email, password: hash, name })
        const accessToken = token.createAccessToken(newUser._id)
        newUser.accessToken = [accessToken]
        await newUser.save();
        nodemailer.sendgreet(email)
        res.cookie('jwt', accessToken, {
            // httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.status(201).json({ accessToken })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'something went wrong' })
    }

}


// login
exports.login = async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: 'All fields are required' })

        const foundUser = await userModel.findOne({ email }).exec()

        if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })
        const match = await bcrypt.compare(password, foundUser.password)
        if (!match) return res.status(401).json({ message: 'Unauthorized' })

        const accessToken = token.createAccessToken(foundUser._id)
        foundUser.accessToken = [accessToken]
        await foundUser.save();

        res.cookie('jwt', accessToken, {
            // httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.json({ message: "Login success", user: { id: foundUser._id, name: foundUser.name } })
    } catch (err) {

    }
}
// logout

exports.logout = async (req, res) => {
    const cookie = req.cookies;
    try {
        console.log(cookie)
        if (!cookie?.jwt) return res.status(204);
        res.clearCookie('jwt', { /*httpOnly: true,*/ sameSite: 'none', secure: true })
        res.json({ message: 'cookie cleared' })
    } catch (err) {
        console.log(err)
    }
}