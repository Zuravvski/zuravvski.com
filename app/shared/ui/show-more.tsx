"use client";

import { WithChildren } from "@/app/types/with-children";
import { useEffect, useRef, useState } from "react";
import { useToggle } from "../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const DefaultMaxHeight = 200; // px

type ShowMoreProps = WithChildren<{
  maxHeight?: number;
}>;

export const ShowMore = ({
  maxHeight: requestedMaxHeight,
  children,
}: ShowMoreProps) => {
  requestedMaxHeight ??= DefaultMaxHeight;
  const [expanded, toggleExpanded] = useToggle(false);
  const [maxHeight, setMaxHeight] = useState(requestedMaxHeight);
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    () => setShouldDisplay(ref.current!.scrollHeight >= maxHeight),
    [maxHeight]
  );

  useEffect(() => {
    const height = expanded ? ref.current!.scrollHeight : requestedMaxHeight!;
    setMaxHeight(height);
  }, [requestedMaxHeight, expanded, setMaxHeight]);

  return (
    <div>
      <div
        ref={ref}
        className="overflow-hidden transition-all"
        style={{
          maxHeight: `${maxHeight}px`,
        }}
      >
        {children}
      </div>
      {shouldDisplay && (
        <button
          type="button"
          onClick={toggleExpanded}
          className="hover:underline mt-3 text-sm flex items-center space-x-2"
        >
          <p>{expanded ? "Show less" : "Show more"}</p>
          <FontAwesomeIcon
            className={clsx("transition-transform delay-300", {
              "rotate-0": !expanded,
              "rotate-180": expanded,
            })}
            icon={faChevronCircleDown}
          />
        </button>
      )}
    </div>
  );
};
