let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ibrahimbenamara76@gmail.com',
        pass: 'StrongEnough'
    }
});

let mailOptions = {
    from: 'ibrahimbenemara76@gmail.com',
    to: 'ibrahimba.contact@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});