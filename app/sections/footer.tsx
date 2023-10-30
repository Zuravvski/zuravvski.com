import clsx from "clsx";
import { Stylizable } from "../types/stylizable";

export type FooterProps = Stylizable<{}>;

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={clsx(
        "text-center",
        "text-sm",
        "text-zinc-400",
        "pt-6",
        "border-t-[1px] border-zinc-300/50",
        className && className
      )}
    >
      &copy; 2020 - {new Date().getFullYear()} Zuravvski IT Services Michał
      Żurawski
    </footer>
  );
};
