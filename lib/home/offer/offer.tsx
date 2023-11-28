import { forwardRef } from "react";
import {
  faChartLine,
  faCode,
  faFire,
  faLightbulb,
  faMessage,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import { Heading } from "@/lib/shared/ui";

import { Stylizable } from "../../shared/types/stylizable";

import { OfferItem } from "./offer-item";

type OfferProps = Stylizable;

export const Offer = forwardRef<HTMLElement, OfferProps>(
  ({ className }: OfferProps, ref) => {
    return (
      <section
        data-anchor="offer"
        ref={ref}
        className={clsx(className && className)}
      >
        <Heading text="What I can offer" className="mb-4" />
        <ul className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16 sm:grid-cols-2 lg:grid-cols-3 text-zinc-400 mt-8">
          <OfferItem
            icon={faScrewdriverWrench}
            title="Full-Stack Prowess"
            description="I am equally comfortable on the front-end and back-end, ensuring seamless web applications from start to finish."
          />
          <OfferItem
            icon={faCode}
            title="Clean Code Architect"
            description="I take pride in crafting elegant, efficient, and maintainable code that stands the test of time."
          />
          <OfferItem
            icon={faFire}
            title="Cutting-Edge Technologies"
            description="I stay up-to-date with the latest industry trends, so your projects are always powered by the most current tools and techniques."
          />
          <OfferItem
            icon={faChartLine}
            title="Results-Driven"
            description="My track record speaks for itself. I have consistently delivered high-impact solutions that drive business growth."
          />
          <OfferItem
            icon={faMessage}
            title="Collaborative Team Player"
            description="Effective communication and teamwork are second nature to me, making me a valuable addition to any project."
          />
          <OfferItem
            icon={faLightbulb}
            title="Problem Solver"
            description="Complex challenges are my playground. I thrive on finding innovative solutions to make your vision a reality."
          />
        </ul>
      </section>
    );
  },
);
