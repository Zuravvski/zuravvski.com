import { Stylizable } from "@/app/types/stylizable";
import clsx from "clsx";

type ButtonProps = Stylizable<{
  as?: "button" | "a";
  text: string;
  type?: "primary" | "default";
}>;

export const Button = ({
  text,
  as: Tag = "button",
  type = "default",
  className,
}: ButtonProps) => {
  return (
    <Tag
      className={clsx(
        "rounded-lg px-8 py-3 border transition-colors",
        type === "primary" && "bg-teal-500 border-teal-500 text-slate-200 hover:bg-teal-600 hover:text-slate-200 hover:border-teal-600",
        type === "default" && "border-slate-200 hover:bg-slate-200 hover:text-slate-950",
        className && className
      )}
    >
      {text}
    </Tag>
  );
};
