import React from "react";
import { useEffect, useState } from "react";
const calculateTimeLeft = () => {
  const deadline = "December, 31, 2084";
  const difference = Date.parse(deadline) - Date.now();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }
  return timeLeft;
};
const Countdowntimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <>
      <div className="flex justify-center gap-10 mx-auto text-center leading-none mb-1">
        <div className="flex flex-col">
          <span className="text-[20px]">{timeLeft.hours}</span>
          <span className="text-[12px]">Hours</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[20px]">{timeLeft.minutes}</span>
          <span className="text-[12px]">Minutes</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[20px]">{timeLeft.seconds}</span>
          <span className="text-[12px]">Seconds</span>
        </div>
      </div>
    </>
  );
};

export default Countdowntimer;

