import PropTypes from "prop-types";
import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";

// function Incrementor(props) {
//   const handleClick = function () {
//     props.onClick();
//   };

//   return <button onClick={props.onClick}>+</button>;
// }

// Incrementor.propTypes = {
//   step: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// function Decrementor(props) {
//   return <button onClick={props.onClick}>-</button>;
// }

// Decrementor.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

// How often will this re-render?
// 1. Change of props (change in parent state or the parent re-renders)
// 2. Change of state
// 3. Change of context
export function CounterFunction(props) {
  const [count1, setCount1] = useState(props.count);
  const [count2, setCount2] = useState(0);

  const increment = useCallback((counterNumber) => {
    if (counterNumber === 1) {
      setCount1(count1 + 1);
    } else {
      setCount2(count2 + 1);
    }
  }, [count1, count2]);

  const decrement = useCallback((counterNumber) => {
    if (counterNumber === 1) {
      setCount1(count1 - 1);
    } else {
      setCount2(count2 - 1);
    }
  }, [count1, count2]);

  const isCountZero = useMemo(() => count1 === 0, [count1]);

  if (isCountZero) {
    return props.FinishComponent;
  }

  return (
    <div>
      <p>Function Count 1: {count1}</p>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
      <p>Function Count 2: {count2}</p>
      <button onClick={() => increment(2)}>+</button>
      <button onClick={() => decrement(2)}>-</button>
      <Link to="/counter-class">Go to Counter Class</Link>
    </div>
  );
}

CounterFunction.propTypes = {
  count: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  FinishComponent: PropTypes.element.isRequired,
};
