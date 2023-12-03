import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </>
  );
};

export default UseState;
