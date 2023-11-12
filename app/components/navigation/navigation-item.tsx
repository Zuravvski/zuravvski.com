"use client";

import Link from "next/link";
import clsx from "clsx";
import { NavigationLink } from "./navigation-link";
import { Stylizable } from "@/app/types/stylizable";

type NavigationItemProps = Stylizable<{
  link: NavigationLink;
}>;

export const NavigationItem = ({ link, className }: NavigationItemProps) => {
  return (
    <li>
      <Link
        href={link.href}
        className={clsx(
          "relative block px-3 py-2 transition hover:text-teal-400",
          className && className
        )}
        onClick={() => link.onClick?.(link.href)}
      >
        {link.name}
      </Link>
    </li>
  );
};
