import { NavigationItem } from "./navigation-item";
import { NavigationLink } from "./navigation-link";

interface NavigationProps {
  links: NavigationLink[];
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav className="pointer-events-auto" role="navigation">
      <ul className="flex justify-center rounded-full px-3 text-sm font-medium ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
        {links.map((link, i) => (
          <NavigationItem key={`${link.href}-${i}`} link={link} />
        ))}
      </ul>
    </nav>
  );
};
