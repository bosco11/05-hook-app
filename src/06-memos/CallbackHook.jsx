import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [Counter, setCounter] = useState(10);

  const Increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  //const Increment = () => {
  //  setCounter(Counter + 1);
  //};

  return (
    <>
      <h1>useCallback Hook: {Counter}</h1>

      <ShowIncrement Increment={Increment} />
    </>
  );
};
