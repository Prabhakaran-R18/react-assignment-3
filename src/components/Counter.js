import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial count is 0

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Counter using useState</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
