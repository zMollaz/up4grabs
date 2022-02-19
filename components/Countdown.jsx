import { useState, useEffect } from "react";
import axios from "axios";

export default function Countdown({
  end_date,
  biddings,
  user,
  users,
  listingItem,
  timeUp,
  setTimeUp,
}) {
  //try formatting time below to seconds maybe ??

  const timeRemaining = new Date(end_date) - new Date();
  const getCountdown = () => {
    const year = new Date().getFullYear() + 1;
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

  const randomWinner = (biddings, users, listing) => {
    const bidders = biddings.map((bidding) => bidding.user_id);
    // console.log(333, bidders);
    const winnerId = bidders[Math.floor(Math.random() * bidders.length)];
    // console.log(444, winnerId);
    const winnerName = users.filter((user) => user.id === winnerId);
    // console.log(555, winnerName);
    const itemWinner = winnerName[0];
    const winner = winnerName[0]?.name;
    // console.log(666, winner);

    const data = {
      winner: itemWinner,
      listingTitle: listing.title,
    };

    if (winner) {
      axios
        .post("/api/email", data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      return winner;
    }
  };

  useEffect(() => {
    if (timeUp) {

      setWinner(randomWinner(biddings, users, listingItem));
    }
    // if (timeRemaining <= 0)
    // // setWinner(randomWinner(biddings, users, listingItem));
    // // setTimeUp(prev => !prev)
    // console.log(333, timeRemaining)
    //might need clean up because of memory leak
  }, [timeUp]);

  // const timeUp = true;

  return (
    <>
      {!timeUp ? (
        <div className="flex py-2 border-gray-200 text-red text-xl flex flex-col grid grid-flow-col gap-2 text-center auto-cols-max">
          {data} until draw!
        </div>
      ) : (
        <div className="flex py-2 border-gray-200 font-bold text-green text-xl flex flex-col grid grid-flow-col gap-2 text-center auto-cols-max">
          Winner is {winner}
        </div>
      )}
    </>
  );
}
