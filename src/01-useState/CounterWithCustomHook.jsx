import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { Counter, increment, decrement, restart } = useCounter();

  return (
    <>
      <h1>Counter with hook:{Counter}</h1>

      <button
        className="btn btn-primary"
        onClick={()=>increment(2)}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={restart}
      >
        Reset
      </button>
      <button
        className="btn btn-primary"
        onClick={()=>decrement(2)}
      >
        -1
      </button>
    </>
  );
};
