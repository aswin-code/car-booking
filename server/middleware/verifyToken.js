const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const cookie = req.cookies
    if (!cookie) return res.status(401).json({ message: 'Unauthorized' })
    const token = cookie.jwt
    if (!token) return res.status(401).json({ message: 'Unauthorized' })
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Forbidden" })
        req.user = decoded.user.id
        next()
    })
}

module.exports = verifyJWT