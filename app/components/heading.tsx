import clsx from "clsx";
import { Stylizable } from "../types/stylizable";
import { Maybe } from "../gql/graphql";

export type HeadingProps = Stylizable<{
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  text?: Maybe<string>;
}>;

export const Heading = ({ as: Tag = 'h2', text, className }: HeadingProps) => {
  return (
    <Tag className={clsx("font-bold text-zinc-100 text-3xl md:text-4xl", className && className)}>{text}</Tag>
  );
}