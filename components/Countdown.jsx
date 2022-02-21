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
  winner,
  setWinner
}) {

 
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
  };
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    let timer = setTimeout(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const data = [];
  Object.entries(countdown).forEach(([unit, value]) => {
    data.push(
      <span key={Math.random().toString(16)}>
        <strong>{value}</strong> {unit}
      </span>
    );
  });

  const randomWinner = (biddings, users, listing) => {
    const bidders = biddings.map((bidding) => bidding.user_id);
    const winnerId = bidders[Math.floor(Math.random() * bidders.length)];
    const itemWinner = users.find((user) => user.id === winnerId);
    const data = {
      winner: itemWinner,
      listingTitle: listing.title,
      listingImage: listing.img_src,
    };

    if (itemWinner) {
      axios
        .post("/api/email", data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      return itemWinner;
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
          Winner is {winner?.name}
        </div>
      )}
    </>
  );
}
