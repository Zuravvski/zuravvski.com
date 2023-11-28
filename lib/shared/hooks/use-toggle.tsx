import { useCallback, useState } from "react";

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [toggle, setToggle] = useState(initialValue);

  const handleToggle = useCallback(() => {
    setToggle((state) => !state);
  }, [setToggle]);

  return [toggle, handleToggle];
};
