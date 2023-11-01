import Image from "next/image";
import clsx from "clsx";

import { Stylizable } from "../types/stylizable";
import { Chip, Dots } from "../components";
import { forwardRef } from "react";

type HeroProps = Stylizable;

export const Hero = forwardRef<HTMLElement, HeroProps>(({ className }, ref) => {
  return (
    <section
      id="#about"
      ref={ref}
      className={clsx(
        "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12",
        className && className
      )}
    >
      <div className="space-y-6 flex-1 text-zinc-400">
        <Chip text="Development · Leadership · Architecture" className="text-zinc-100" />
        <p className="text-4xl font-bold text-zinc-100">
          Hi! My name is Michał Żurawski and I am ready to turn your next dream initiative
          into reality!
        </p>
        <p className="mt-6 space-y-7 text-base">
          I bring over 7 years of expertise in web technologies to the table. If
          you are looking for a top-tier software developer with a
          specialization in .NET and the latest JavaScript frameworks like React
          and Angular, you are in the right place.
        </p>
      </div>
      <div className="ml-auto">
        <div className="max-w-xs relative rotate-3 ml-10">
          <Image
            src="/profile.png"
            alt="profile"
            width={350}
            height={350}
            className="grayscale aspect-square"
          />
          <div className="z-[-1] absolute inset-0 bg-[#030303] rounded-3xl"></div>
          <Dots className="absolute w-[20px] left-[0.5rem] bottom-[3rem] fill-slate-200" />
          <Dots className="absolute w-[20px] left-[-2rem] bottom-[1rem] fill-teal-500" />
          <Dots className="absolute w-[20px] right-[0.5rem] top-[2rem] fill-slate-200" />
          <Dots className="absolute w-[20px] right-[-2rem] top-[4rem] fill-teal-500" />
        </div>
      </div>
    </section>
  );
});
