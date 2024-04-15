//nodemailer

const nodemailer = require('nodemailer');

//port no->25 smtp  80->web server


async function sendverifyemail(to_email) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user: "ayushmohindru81@gmail.com",
            pass: "aokw htbq zbkq pmqv"
        }
    });

    var info = await transporter.sendMail({
        to: to_email,
        from: "ayushmohindru81@gmail.com",
        subject: "please verify email",
        // text or html:""
        html: "<h1 style=\"color:red;background-color:yellow;\">click on link to verify email</h1><a href=\"http://localhost:8080/verifyemail?email=" + to_email + "\">click to verify</a>"
    });
}
module.exports = sendverifyemail;