import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((previousValue) => previousValue - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Time: {timeRemaining}</p>
    </div>
  );
}
