import Link from "next/link";
import clsx from "clsx";
import { NavigationLink } from "./navigation";

interface NavigationItemProps {
  link: NavigationLink;
  active: boolean;
}

export const NavigationItem = ({ link, active }: NavigationItemProps) => {
  return (
    <li>
      <Link
        href={link.href}
        className={clsx(
          "relative block px-3 py-2 transition hover:text-teal-400",
          active && "text-teal-400"
        )}
        onClick={() => link.onClick?.(link)}
      >
        {link.name}
        {active && (
          <span className="absolute inset-x-1 -bottom-px h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
        )}
      </Link>
    </li>
  );
};
