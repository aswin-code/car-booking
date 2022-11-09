const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.createAccessToken = (id) => {
    return (jwt.sign({
        "user": {
            id
        },
    }, process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1d' }
    ))
}