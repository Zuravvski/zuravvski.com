import Link from "next/link";
import clsx from "clsx";
import { NavigationLink } from "./navigation";

interface NavigationItemProps {
  link: NavigationLink;
}

export const NavigationItem = ({ link }: NavigationItemProps) => {
  return (
    <li>
      <Link
        href={link.href}
        className={clsx(
          "relative block px-3 py-2 transition hover:text-teal-400",
        )}
        onClick={() => link.onClick?.(link.href)}
      >
        {link.name}
      </Link>
    </li>
  );
};
