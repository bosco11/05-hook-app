import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (interationNumber = 100) => {
  for (let i = 0; i < interationNumber; i++) {
    console.log("ahi vamos...");
  }

  return interationNumber + "iteraciones realizadas";
};

export const MemoHook = () => {
  const [show, setshow] = useState(true);

  const { Counter, increment } = useCounter(1000);
  const memorizeValue = useMemo(() => heavyStuff(Counter), [Counter]);

  return (
    <>
      <h1>
        Counter: <small>{Counter}</small>
      </h1>
      <hr />

      <h4>{memorizeValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setshow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
