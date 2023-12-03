import { useEffect, useState, React } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Hey buddy!")
  
      return console.log("Buy Buddy!");
    }, [count]);
  
    return (
      <>
        <div>Count: {count}</div>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      </>
    );
}

export default UseEffect
