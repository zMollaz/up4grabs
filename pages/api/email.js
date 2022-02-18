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

    const message = {
      to: "mikko.delosreyes12@gmail.com",
      // to: req.body.winner.email,
      from: "up4grabs.app1@gmail.com",
      isMultiple: false,
      dynamicTemplateData: {
        winner: req.body.winner.name,
        listingTitle: req.body.listingTitle,
      },
      template_id: "d-9c1463d498324294b040e2b08e5c3313",
    };

    console.log("123", message);

    sgMail
      .send(message)
      .then((response) => console.log("Email sent!"))
      .catch((error) => console.log(error.message));

    // res.json({ response });
  }
}
