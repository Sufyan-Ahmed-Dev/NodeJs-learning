var nodemailer = require('nodemailer');
require("dotenv").config({ path : "./.env"})

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user : process.env.myEmail,  
    pass: process.env.myEmailPassward ,
  }
});

var mailOptions = {
  from: process.env.myEmail ,
  to: process.env.UserEmail,
  subject: process.env.EmailSubject,
  text: process.env.EmailText,
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

// console.log( process.env.myEmailPassward)

