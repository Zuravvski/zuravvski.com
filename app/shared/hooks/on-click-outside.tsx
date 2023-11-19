import { RefObject, useEffect } from "react";
import debounce from "lodash/debounce";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleOnClickOutside = debounce((event: Event) => {
      if (ref.current && !ref.current.contains(event.target as any)) {
        callback();
      }
    });

    document.addEventListener("mousedown", handleOnClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleOnClickOutside);
  }, [ref, callback]);
};
