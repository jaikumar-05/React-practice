import { useEffect, useState } from "react";
const Card = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("updating phase");
  }, [count]);

  return (
    <div>
      {count}
      <button onClick={() => setCount((a) => a + 1)}>increment</button>
    </div>
  );
};
export default Card;
