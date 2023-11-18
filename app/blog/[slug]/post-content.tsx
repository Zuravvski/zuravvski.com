"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import copy from "copy-to-clipboard";

import { Stylizable } from "@/app/types/stylizable";

type PostContentProps = Stylizable<{
  text: string;
}>;

export const PostContent = ({ text, className }: PostContentProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const copyToClipboard = (e: MouseEvent) => {
      const code = (e.target as HTMLElement).dataset["code"];
      if (code) {
        copy(code);
      }
    };

    const copyCodeButtons =
      ref.current!.querySelectorAll<HTMLButtonElement>("[data-code]");
    copyCodeButtons.forEach((button) =>
      button.addEventListener("click", copyToClipboard),
    );

    return () =>
      copyCodeButtons.forEach((button) =>
        button.removeEventListener("click", copyToClipboard),
      );
  }, []);

  return (
    <article
      ref={ref}
      className={clsx("space-y-6 blog-article", className && className)}
      dangerouslySetInnerHTML={{ __html: text }}
    ></article>
  );
};
