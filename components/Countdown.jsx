import { useState, useEffect } from "react";


export default function Countdown({ end_date, biddings, users }) {
  const getCountdown = () => {
    const year = new Date().getFullYear() + 1;
    const timeRemaining = new Date(end_date) - new Date();
    let countdown = {};
    if (timeRemaining > 0) {
      countdown = {
        Days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
        Seconds: Math.floor((timeRemaining / 1000) % 60),
      };
    }
    return countdown;
    //after winner is selected, send a post request with winner's user-id
    //in the route query the user information
    //insert into the correct email fields in mail.js.
  };
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown());
    }, 1000);
  });

  const data = [];
  Object.entries(countdown).forEach(([unit, value]) => {
    data.push(
      <span key={Math.random().toString(16)}>
        <strong>{value}</strong> {unit}
      </span>
    );
  });
  // const { users } = useContext(UsersContext); 

  const [winner, setWinner] = useState("")
  const randomWinner = (biddings, users) => {
    console.log(111, biddings)
    console.log(222, users)
    const bidders = biddings.map(bidding => bidding.user_id)
    console.log(333, bidders)
    const winnerId = bidders[Math.floor(Math.random() * bidders.length)];
    console.log(444, winnerId)
    const winnerName = users.filter(user => user.id === winnerId);
    console.log(555, winnerName)
    const winner = winnerName[0]?.name;
    console.log(666, winner)
    return winner;
  }
  
  useEffect(() => {
    setWinner(randomWinner(biddings, users))
  },[])
  
  const timeRemaining = false;
 
  const sgMail = require("@sendgrid/mail");
require("dotenv").config();
// const { apiKey } = require('../../config.js');

const sendMail = () => {
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
}

sendMail()
console.log("HELLO", sendMail())

  
  return (
    <>
      {timeRemaining ? (
        <div className="flex py-2 border-gray-200 text-red text-xl flex flex-col grid grid-flow-col gap-2 text-center auto-cols-max">
          {data} until draw!
        </div>
      ) : (<div className="flex py-2 border-gray-200 font-bold text-green text-xl flex flex-col grid grid-flow-col gap-2 text-center auto-cols-max">
      Winner is {winner}
    </div>)}
    </>
  );
}
