import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="flex flex-col items-center">
        <div className="bg-blue-600 text-white text-2xl font-bold rounded-lg w-16 h-16 flex items-center justify-center">
          {timeLeft[interval]}
        </div>
        <span className="text-sm uppercase mt-2">{interval}</span>
      </div>
    );
  });

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-center mb-4">Time Until Event</h3>
      <div className="flex justify-center space-x-4">
        {timerComponents.length ? timerComponents : <span className="text-xl font-bold">Event has started!</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;