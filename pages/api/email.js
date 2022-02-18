const sgMail = require("@sendgrid/mail");
require("dotenv").config();
// const { apiKey } = require('../../config.js');
export default async function emailHandler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }

  if (req.method === "POST") {
    const apiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(apiKey);
    // console.log(apiKey)
console.log("HELLOO", req.body)

const message = (to, listing_title, user_name ) => ({
      to: 'mikko.delosreyes12@gmail.com',
      from: "up4grabs.app1@gmail.com",
      // subject: 'WINNER!',
      // text: 'and easy to do anywhere, even with Node.js',
      // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      isMultiple: false,
      data: {listing_title, user_name},
      template_id: 'd-9c1463d498324294b040e2b08e5c3313',

})

const newParam = message(req.body.itemWinner.email, req.body.listingTitle, req.body.itemWinner.name)
console.log("123", newParam)

    sgMail
      .send(newParam)
      .then((response) => console.log(111, "Email sent!"))
      .catch((error) => console.log(222, error.message, JSON.stringify(error.response?.body?.errors || "{}")));

    // res.json({ response });
  }
}
