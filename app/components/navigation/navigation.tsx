import { NavigationItem } from "./navigation-item";

export interface NavigationLink {
  href: string;
  name: string;
  onClick?: (href: string) => void;
}

type NavigationProps = {
  activeLink?: string | null;
  links: NavigationLink[];
};

export const Navigation = ({ links, activeLink }: NavigationProps) => {
  return (
    <nav className="pointer-events-auto hidden lg:block">
      <ul className="flex justify-center rounded-full px-3 text-sm font-medium ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
        {links.map((link, i) => (
          <NavigationItem
            key={`${link.href}-${i}`}
            active={link.href === activeLink}
            link={link}
          />
        ))}
      </ul>
    </nav>
  );
};
