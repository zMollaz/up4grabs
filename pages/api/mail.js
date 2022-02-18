const sgMail = require("@sendgrid/mail");
require("dotenv").config();
// const { apiKey } = require('../../config.js');
const apiKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(apiKey);
// console.log(apiKey)

const message = {
  to: 'mikko.delosreyes12@gmail.com',
  from: 'up4grabs.app1@gmail.com',
  subject: "You're a winner baby!",
  text: "You've won an item from Bobby Lee",
  html: "<h1>You've won an item from Bobby Lee</h1>"
}

sgMail
  .send(message)
  .then((response) => console.log('Email sent!'))
  .catch((error) => console.log(error.message));