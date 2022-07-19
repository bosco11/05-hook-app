export const Quote = ({autor,quote}) => {
  return (
    <>
      <blockquote className="blockquote text-end">
        <p className="mb-1">{quote}</p>
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>
    </>
  );
};
