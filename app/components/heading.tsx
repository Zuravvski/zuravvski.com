import clsx from "clsx";
import { Stylizable } from "../types/stylizable";

export type HeadingProps = Stylizable<{
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  text: string;
}>;

export const Heading = ({ as: Tag = 'h2', text, className }: HeadingProps) => {
  return (
    <Tag className={clsx("font-bold text-zinc-100 text-4xl", className && className)}>{text}</Tag>
  );
}