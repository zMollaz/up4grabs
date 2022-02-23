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
  setWinner,
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

    //might need clean up because of memory leak
  }, [timeUp]);

  return (
    <>
      {!timeUp ? (
        <div className="py-2 border-gray-200 text-red text-xl grid grid-flow-col gap-2 text-center auto-cols-max">
          {data} until draw!
        </div>
      ) : (
        // <div
        //   class="px-4 py-3 leading-normal text-[#15803D] bg-[#DCFCE7] rounded-lg"
        //   role="alert"
        // >
        //   <p class="font-bold">Our lucky winner is </p>
        //   <p>{winner?.name}!!!</p>
        // </div>
        // <div className="py-2 border-gray-200 font-bold text-green text-xl grid grid-flow-col gap-2 text-center auto-cols-max">
        //   Winner is {winner?.name}
        // </div>
        <div className="flex mt-3 ">
          <div className="m-auto ">
            <div className="bg-[#DCFCE7] shadow-md px-4 flex flex-row rounded-lg animate-bounce">
              <svg
                className="h-8 w-8 text-[#15803D]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="8" y1="21" x2="16" y2="21" />{" "}
                <line x1="12" y1="17" x2="12" y2="21" />{" "}
                <line x1="7" y1="4" x2="17" y2="4" />{" "}
                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />{" "}
                <circle cx="5" cy="9" r="2" /> <circle cx="19" cy="9" r="2" />
              </svg>
              <b class="p-1 text-[#15803D]">Our lucky winner is</b>
              <p class="p-1 text-[#15803D] font-bold font-lucky mt-1">
                {winner?.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
//test