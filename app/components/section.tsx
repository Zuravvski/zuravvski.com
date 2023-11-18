import clsx from "clsx";

import { Stylizable } from "../types/stylizable";
import { WithChildren } from "../types/with-children";

type SectionProps = Stylizable<WithChildren<{}>>;

export const Section = ({ children, className }: SectionProps) => {
  <section className={clsx("pl-3", className && className)}>
    {children}
  </section>;
};
