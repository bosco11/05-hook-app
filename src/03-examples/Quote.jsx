import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({autor,quote}) => {

  const [bosxSize, setbosxSize] = useState({width:0,height:0});

  const pRef = useRef()

  useLayoutEffect(() => {
    const {width,height} = pRef.current.getBoundingClientRect();
    setbosxSize({width,height});
  }, [quote])


  return (
    <>
      <blockquote className="blockquote text-end"
      style={{display:"flex"}}
      >
        <p ref={pRef}className="mb-1">{quote}</p>
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>

      <code>{JSON.stringify(bosxSize)}</code>
    </>
  );
};
