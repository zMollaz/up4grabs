import {useState, useEffect} from 'react'



export default function Countdown(props) {
const {end_date} = props

  const getCountdown = () => {
    const year = new Date().getFullYear() +1;
    const timeRemaining = new Date(end_date) - new Date();
    let countdown = {}
    if (timeRemaining > 0) {
      countdown = {
        Days : Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        Hours : Math.floor ((timeRemaining / (1000 * 60 *60)) % 24),
        Minutes : Math.floor((timeRemaining / 1000 / 60) % 60),
        Seconds : Math.floor((timeRemaining / 1000) % 60 ),
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
    <div class=" text-red text-xl flex flex-col grid grid-flow-col gap-5 text-center auto-cols-max">
      {data} until draw!
    </div>
  
  )
}

{/* <div class="flex flex-col">
<span class="font-mono text-5xl countdown">
</span>
    days
  
</div> 
<div class="flex flex-col">
<span class="font-mono text-5xl countdown">

</span>
    hours
  
</div> 
<div class="flex flex-col">
<span class="font-mono text-5xl countdown">

</span>
    min
  
</div> 
<div class="flex flex-col">
<span class="font-mono text-5xl countdown">

</span>
    sec
  
</div> */}




