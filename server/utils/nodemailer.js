const nodemailer = require('nodemailer')

exports.sendgreet = async (email) => {
    try {
        let transporter = nodemailer.createTransport({

            service: 'Gmail',
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASS,
            },
        })

        transporter.sendMail({
            from: "hello@gmail.com",
            to: email,
            subject: 'welcome to ally',
            text: 'welcome to ally ',
            html: `<p>welcome to ally</p>`
        }, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(info)
            }
        })


    } catch (error) {
        console.log(error)
    }
}
