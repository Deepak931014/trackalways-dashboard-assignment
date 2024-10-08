import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-xl">{time.toLocaleDateString()}</h2>
      <h1 className="text-4xl font-bold">{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
