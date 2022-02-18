import { useState, useEffect } from "react";
import axios from "axios";

export default function Countdown({ end_date, biddings, users, listingItem }) {
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
    let timer = setTimeout(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearTimeout();
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

  const [winner, setWinner] = useState("");
  const randomWinner = (biddings, users) => {
    console.log(111, biddings);
    console.log(222, users);
    const bidders = biddings.map((bidding) => bidding.user_id);
    // console.log(333, bidders);
    const winnerId = bidders[Math.floor(Math.random() * bidders.length)];
    // console.log(444, winnerId);
    const winnerName = users.filter((user) => user.id === winnerId);
    // console.log(555, winnerName);
    const winner = winnerName[0]
    // console.log(666, winner);
    return winner;
  };
  
  useEffect(() => {
    setWinner(randomWinner(biddings, users));

    //axios.post("/api/email")
    //.then((response) => {console.log(response)})

    console.log("!!!", listingItem)
    axios({
      method: 'post',
      url: '/api/email',
      data: {
        itemWinner: winner,
        listingTitle: listingItem.title
      }
    }).then((response) => {console.log(response)})

    .catch((error) => console.log(error))

  }, []);

  const timeRemaining = false;

  return (
    <>
      {timeRemaining ? (
        <div className="flex py-2 border-gray-200 text-red text-xl flex flex-col grid grid-flow-col gap-2 text-center auto-cols-max">
          {data} until draw!
        </div>
      ) : (
        <div className="flex py-2 border-gray-200 font-bold text-green text-xl flex flex-col grid grid-flow-col gap-2 text-center auto-cols-max">
          Winner is {winner?.name}
        </div>
      )}
    </>
  );
}
