import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [State, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({ ...State, isLoading: false });

    const res = await fetch(url);
    const data = await res.json();

    setState({ data, isLoading: false, hasError:null });  
     
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: State.data,
    isLoading: State.isLoading,
    hasError: State.hasError,
  };
};
