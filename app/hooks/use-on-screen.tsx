import { MutableRefObject, useEffect, useState } from "react";

export const useOnScreen = (ref: MutableRefObject<Element | null>): boolean => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isOnScreen;
};

export const useWhichOnScreen = (
  refs: MutableRefObject<Element | null>[],
  threshold?: number | number[]
): string | null => {
  const [elementOnScreen, setElementOnScreen] = useState<string | null>(null);

  useEffect(() => {
    const validRefs = refs.filter(
      (ref) => ref.current && ref.current.getAttribute("data-anchor")
    );

    if (validRefs.length === 0) {
      return;
    }

    const observers: IntersectionObserver[] = [];

    for (const ref of validRefs) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setElementOnScreen(ref.current!.getAttribute("data-anchor"));
          }
        },
        {
          threshold: threshold ?? 0.56
        }
      );

      observer.observe(ref.current!);
    }
    return () => observers.forEach((observer) => observer.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refs]);

  return elementOnScreen;
};
