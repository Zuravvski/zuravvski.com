export interface NavigationLink {
  href: string;
  name: string;
  onClick?: (href: string) => void;
}
