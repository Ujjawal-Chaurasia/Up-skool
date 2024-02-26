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
const Countdowntimertwo = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <>
      <div
        className="flex justify-center gap-4 sm:gap-24 md:gap-28 mx-auto text-center leading-none"
      >
        <div className="flex flex-col">
            <span className="text-[22px] sm:text-[90px]">{timeLeft.hours}</span><span className="text-[18px] sm:text-[20px]">Hours</span>
        </div>
        <div className="flex flex-col">
            <span className="text-[22px] sm:text-[90px]">{timeLeft.minutes}</span><span className="text-[18px] sm:text-[20px]">Minutes</span>
        </div>
        <div className="flex flex-col">
            <span className="text-[22px] sm:text-[90px]">{timeLeft.seconds}</span><span className="text-[18px] sm:text-[20px]">Seconds</span>
        </div>
      </div>
    </>
  );
};

export default Countdowntimertwo;

