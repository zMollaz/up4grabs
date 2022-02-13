import {useState, useEffect} from 'react'

export default function Countdown() {
  const getCountdown = () => {
    const year = new Date().getFullYear() +1;
    const timeRemaining = new Date(`${year}-1-1`) - new Date();
    let countdown = {}
    if (timeRemaining > 0) {
      countdown = {
        Days : Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        Hours : Math.floor ((timeRemaining / (1000 * 60 *60)) % 24),
        Minutes : Math.floor((timeRemaining / 1000 / 60) % 60),
        Seconds : Math.floor((timeRemaining / 1000) % 60),
      };
    }
    return countdown;
  };
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown());
    }, 1000)
  });

  const data = [];
  Object.entries(countdown).forEach(([unit, value]) => {
    data.push(
      <span key={Math.random().toString(16)}>
        <strong>{value}</strong> {unit}
      </span>
    )
  })

  return (
    <div>{data} until draw!
    </div>
    

  )
}
