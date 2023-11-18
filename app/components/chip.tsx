import clsx from "clsx";

import { Stylizable } from "../types/stylizable";

type ChipProps = Stylizable<{
  text: string;
}>;

export const Chip = ({ text, className }: ChipProps) => {
  return (
    <span
      className={clsx(
        "uppercase text-xs font-semibold bg-gradient-to-r from-teal-800 to-teal-400 px-1.5 py-0.5 rounded-md",
        className && className,
      )}
    >
      {text}
    </span>
  );
};
