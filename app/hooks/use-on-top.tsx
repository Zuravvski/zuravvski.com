import { MutableRefObject, useCallback, useEffect, useState } from "react";

type Refs =
  | MutableRefObject<HTMLElement | null>
  | MutableRefObject<HTMLElement | null>[];

interface HTMLElementRange {
  from: number;
  to: number;
  id: string | null;
}

const AnchorAttribute = "data-anchor";

export const useOnTop = (ref: Refs, offset = 0) => {
  const [element, setElement] = useState<string | null>(null);
  const [ranges, setRanges] = useState<HTMLElementRange[]>([]);
  const refs = Array.isArray(ref) ? ref : [ref];

  const onScroll = useCallback(() => {
    if (ranges.length === 0) {
      return;
    }

    const currentElement = ranges.find(
      (x) => x.from <= window.scrollY && window.scrollY <= x.to
    );

    console.log('Element', currentElement, window.scrollY);

    if (element !== currentElement?.id) {
      setElement(currentElement?.id ?? null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ranges.length, setElement, element]);

  useEffect(() => {
    if (refs.length === 0) {
      return;
    }

    const sectionRanges = refs
      .filter((x) => x?.current)
      .map<Omit<HTMLElementRange, "to">>((x) => ({
        from: x.current!.offsetTop,
        id: x.current!.getAttribute(AnchorAttribute),
      }))
      .sort((x) => x.from)
      .reduce<HTMLElementRange[]>((acc, current, currentIndex, original) => {
        const range = current as HTMLElementRange;
        if (currentIndex === original.length - 1) {
          range.to = Number.MAX_VALUE;
        } else {
          const upperRange = original[currentIndex + 1].from - 1;
          const to = upperRange - offset;
          range.to = to;
        }

        if (currentIndex === 0) {
          range.from = 0;
        }

        acc.push(range);

        return acc;
      }, []);

    console.log('Ranges', ranges);

    setRanges(sectionRanges);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refs.length, onScroll, setRanges]);

  return element;
};
