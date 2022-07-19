import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { increment, Counter } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${Counter}`
  );

  const { autor, quote } = !!data && data[0];

  return (
    <>
      <h1>braking bad</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote autor={autor} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next Quote
      </button>
    </>
  );
};
