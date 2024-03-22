"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import TimerRing from "./TimerRing";

const CountdownTimer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const futureDate = moment("2025-03-01");
      const now = moment();
      const duration = futureDate.diff(now);

      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {timeRemaining &&
        (timeRemaining.days +
          timeRemaining.hours +
          timeRemaining.minutes +
          timeRemaining.seconds <=
        0 ? (
          <p className="text-4xl text-complementary-50">
            El gran dia finalmente llegó!
          </p>
        ) : (
          <>
            <h1 className="font-semibold">¡El gran dia se acerca!</h1>
            <div className="flex flex-row-reverse items-center justify-center gap-4">
              <TimerRing
                numero={timeRemaining.seconds}
                numeroInicial={60}
                text="segundos"
              />
              <TimerRing
                numero={timeRemaining.minutes}
                numeroInicial={60}
                text="minutos"
              />
              <TimerRing
                numero={timeRemaining.hours}
                numeroInicial={24}
                text="horas"
              />
              <TimerRing
                numero={timeRemaining.days}
                numeroInicial={365}
                text="dias"
              />
            </div>
            {/* <p className="text-4xl text-complementary-50">{`${timeRemaining.days} : ${timeRemaining.hours} : ${timeRemaining.minutes} : ${timeRemaining.seconds}`}</p> */}
          </>
        ))}
    </>
  );
};

export default CountdownTimer;
