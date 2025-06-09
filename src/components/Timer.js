import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card">
      <h2>
        <span role="img" aria-label="clock" style={{marginRight: 6}}>🕒</span>
        Live Clock
      </h2>
      <p className="clock-value">{time}</p>
    </div>
  );
}

export default Timer;