import "../styles/globals.css";
import useUsers from "../hooks/useUsers"
import UsersContext from "../context/UsersContext"


const sgMail = require('@sendgrid/mail')

const API_KEY = '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'

sgMail.setApiKey(API_KEY)

const message = {
  to: 'mikko.delosreyes12@gmail.com',
  from: 'up4grabs.app@gmail.com',
  subject: "You're a winner baby!",
  text: "You've won an item from Bobby Lee",
  html: <h1>You've won an item from Bobby Lee</h1>
}

sgMail
  .send(message)
  .then((response) => console.log('Email sent!'))
  .catch((error) => console.log(error.message));



function MyApp({ Component, pageProps }) {
  return (
    <UsersContext.Provider value={useUsers()}>
      <Component {...pageProps} />
    </UsersContext.Provider>
  );
}

export default MyApp;
