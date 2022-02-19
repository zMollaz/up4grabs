const sgMail = require("@sendgrid/mail");
require("dotenv").config();

export default async function emailHandler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ messsage: "Method not allowed" });
  }

  if (req.method === "POST") {
    const apiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(apiKey);

    const message = {
      // to: req.body.winner.email,
      to: "mikko.delosreyes12@gmail.com",
      // from: "up4grabs.app1@gmail.com",
      from: "up4grabs.app2@gmail.com",
      isMultiple: false,
      dynamicTemplateData: {
        winner: req.body.winner?.name,
        listingTitle: req.body.listingTitle,
      },
      // template_id: "d-9c1463d498324294b040e2b08e5c3313",  //template 1
      template_id: "d-9b54ba70537b492192ade1c98b7df59b",     //template 2
    };

    console.log("123", message);

    sgMail
      .send(message)
      .then((response) => {
        console.log("Email sent!")
        res.json({ response });
    })
      .catch((error) => console.log(error.message));

  }
}
