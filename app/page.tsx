"use client";

import { useCallback, useEffect, useRef } from "react";

import { Navigation, NavigationLink } from "./components";
import { Experience, Footer, Header, Hero, Offer, Skills } from "./sections";
import { useWhichOnScreen } from "./hooks";

export default function Home() {
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  const activeSection = useWhichOnScreen(sectionRefs, 0.4);
  
  const onClick = useCallback((href: string) => {
    const target = sectionRefs.find(
      (x) => x.current?.getAttribute("id") === href
    );

    if (!target?.current) {
      return;
    }

    const padding = parseInt(
      window.getComputedStyle(target.current).getPropertyValue("padding-top"),
      10
    );
    const offset =
      target.current.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      padding;

    window.scrollTo({ top: offset, behavior: "smooth" });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      onClick(window.location.hash);
    }
  }, [onClick]);

  return (
    <>
      <Header>
        <Navigation
          links={[
            { href: "#offer", name: "Offer", onClick: onClick },
            { href: "#experience", name: "Experience", onClick: onClick },
            { href: "#skills", name: "Skills", onClick: onClick },
            { href: "#projects", name: "Projects", onClick: onClick },
            { href: "/blog", name: "Blog" },
          ]}
          activeLink={activeSection}
        />
      </Header>
      <div className="lg:max-w-6xl container mx-auto flex flex-col min-h-screen py-8 px-12">
        <main className="py-20 pl-3">
          <Hero />
          <Offer ref={sectionRefs[0]} className="py-10" />
          <Experience ref={sectionRefs[1]} className="py-10" />
          <Skills ref={sectionRefs[2]} className="py-10" />
        </main>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
