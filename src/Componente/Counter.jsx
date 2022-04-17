import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter => counter + 1);
  };

  useEffect(() => {
    window.addEventListener('mousedown', incrementCounter);
    return () => {
      console.log("remove mousedown");
      window.removeEventListener('mousedown', incrementCounter);
    };
  });

  return (
    <div>
      <p>
        {counter}
      </p>
    </div>
  );
}

export default Counter;