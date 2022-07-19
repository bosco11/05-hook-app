import React from "react";

export const ShowIncrement = React.memo(({ Increment }) => {
  console.log("hola");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        Increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
