import { useState, useEffect } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <p>Auto Increment: {count}</p>;
};

export default Increment;
