"use client";

import clsx from "clsx";
import Link from "next/link";

import { Stylizable } from "../../types/stylizable";

import { NavigationLink } from "./navigation-link";

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
          className && className,
        )}
        onClick={() => link.onClick?.(link.href)}
      >
        {link.name}
      </Link>
    </li>
  );
};
