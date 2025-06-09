import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="card">
      <h2>
        <span role="img" aria-label="counter" style={{marginRight: 6}}>🔢</span>
        Counter
      </h2>
      <p className="count-label">
        Current Count: <span className="count-value">{count}</span>
      </p>
      <div className="button-group">
        <button className="btn btn-decrement" onClick={decrement} aria-label="Decrement">−</button>
        <button className="btn btn-reset" onClick={reset} aria-label="Reset">Reset</button>
        <button className="btn btn-increment" onClick={increment} aria-label="Increment">+</button>
      </div>
    </div>
  );
}

export default Counter;