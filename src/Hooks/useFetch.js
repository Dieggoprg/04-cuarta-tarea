import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isLoading: true });

  useEffect(() => {
    const getFetch = async () => {
      try {
        setState({ data: null, isLoading: true });

        const resp = await fetch(url);
        const data = await resp.json();

        await new Promise((resolve) => setTimeout(resolve, 500));

        setState({ data, isLoading: false });
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    if (url) getFetch();
  }, [url]);
  return { data: state.data, isLoading: state.isLoading };
};
