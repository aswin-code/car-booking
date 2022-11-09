const app = require('express')();
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoute = require('./routes/auth')
const credentials = require('./middleware/credentional')
const corsOptions = require('./config/corOptions')
const userRoute = require('./routes/user')
const adminRoute = require('./routes/admin')


//initail setup
const port = process.env.PORT || 5000
app.use(credentials);
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser())


//routes
app.use(express.static('uploads'));

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/admin', adminRoute)

app.listen(port, async () => {
    console.log('server running on port ' + port + ' waiting to connect with data base')
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log('db connected successfully')

    } catch (error) {
        console.log("error", error)
    }
})