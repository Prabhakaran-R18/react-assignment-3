import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Timer using useEffect</h2>
      <p>Current Time: {time}</p>
    </div>
  );
}

export default Timer;
