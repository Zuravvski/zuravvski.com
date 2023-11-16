import { Stylizable } from "@/app/types/stylizable";
import { WithChildren } from "@/app/types/with-children";
import clsx from "clsx";
import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  WithChildren &
  Stylizable;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-medium bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 group cursor-pointer",
          className && className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
