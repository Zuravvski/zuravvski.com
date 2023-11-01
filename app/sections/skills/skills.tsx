import { forwardRef } from "react";
import clsx from "clsx";

import { Heading } from "../../components";
import { Stylizable } from "../../types/stylizable";

type SkillProps = Stylizable;

export const Skills = forwardRef<HTMLElement, SkillProps>(({ className }, ref) => {
  return (
    <section id="#skills" ref={ref} className={clsx(className && className)}>
      <Heading text="What I am good at" className="mb-8" />
    </section>
  );
});
