import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const difference = +new Date("2024-06-22T19:30:00") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Countdown() {
  const [weddingDay, setWeddingDay] = useState();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { days, hours, minutes, seconds } = timeLeft;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (!days && !hours && !minutes && !seconds) {
      setWeddingDay(true);
    }

    return () => clearTimeout(timer);
  });

  return (
    <section id="countdown" className="pt-10 text-center bg-[#d4b562] h-60">
      <div id="container" className="max-w-6xl w-full px-4 mx-auto">
        <p className="m-3 text-white">Bienvenidos a nuestra boda</p>
        {weddingDay ? (
          <p id="reloj" className="text-white text-5xl">
            ¡Hoy es el gran día!
          </p>
        ) : (
          <div className="flex justify-center mt-7 text-white" id="reloj_number">
            <div className="w-1/6 lg:w-1/12 flex flex-col justify-center p-0">
              <p className="text-3xl m-0 font-semibold" id="dias">
                {days}
              </p>
              <p className="text-sm">días</p>
            </div>

            <p className="text-3xl m-0 font-semibold">:</p>
            <div className="w-1/6 lg:w-1/12 flex flex-col justify-center p-0">
              <p className="text-3xl m-0 font-semibold" id="horas">
                {hours}
              </p>
              <p className="text-sm">hs</p>
            </div>

            <p className="text-3xl m-0 font-semibold">:</p>
            <div className="w-1/6 lg:w-1/12 flex flex-col justify-center p-0">
              <p className="text-3xl m-0 font-semibold" id="min">
                {minutes}
              </p>
              <p className="text-sm">min</p>
            </div>

            <p className="text-3xl m-0 font-semibold">:</p>
            <div className="w-1/6 lg:w-1/12 flex flex-col justify-center p-0">
              <p className="text-3xl m-0 font-semibold" id="seg">
                {seconds}
              </p>
              <p className="text-sm">seg</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
