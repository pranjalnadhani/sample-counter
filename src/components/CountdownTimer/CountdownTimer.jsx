import { useEffect, useState } from "react";

/**
 * Functional component that displays a countdown timer.
 * @returns {JSX.Element}
 */
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
