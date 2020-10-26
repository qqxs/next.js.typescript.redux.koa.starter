import { useEffect, useRef, MutableRefObject } from "react";

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useInterval = (callback: unknown, delay: number | null) => {
  const savedCallback: MutableRefObject<any> = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args) => savedCallback.current(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
