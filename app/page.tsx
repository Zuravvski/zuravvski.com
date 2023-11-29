"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

import { Experience, Hero, Offer, Skills } from "@/lib/home";
import {
  Footer,
  Header,
  MobileNavigation,
  Navigation,
} from "@/lib/shared/layout";

export default function Home() {
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  const onNavItemClick = useCallback((href: string) => {
    href = href.replace("#", "");
    const target = sectionRefs.find(
      (x) => x.current?.getAttribute("data-anchor") === href,
    );

    if (!target?.current) {
      return;
    }

    const margin = parseInt(
      window.getComputedStyle(target.current).getPropertyValue("margin-top"),
      10,
    );
    const offset =
      target.current.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      margin;

    window.scrollTo({ top: offset, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      onNavItemClick(window.location.hash);
    }
  }, [onNavItemClick]);

  const links = useMemo(
    () => [
      { href: "#about", name: "About", onClick: onNavItemClick },
      { href: "#offer", name: "Offer", onClick: onNavItemClick },
      {
        href: "#experience",
        name: "Experience",
        onClick: onNavItemClick,
      },
      { href: "#skills", name: "Skills", onClick: onNavItemClick },
      { href: "/blog", name: "Blog" },
    ],
    [onNavItemClick],
  );

  return (
    <>
      <Header
        navigation={<Navigation links={links} />}
        mobileNavigation={<MobileNavigation links={links} />}
      ></Header>
      <div className="lg:max-w-6xl container mx-auto flex flex-col min-h-screen py-0 md:py-8 px-8 md:px-12">
        <main className="md:pl-3 space-y-16 mb-8 lg:mb-16">
          <Hero ref={sectionRefs[0]} className="mt-16" />
          <Offer ref={sectionRefs[1]} />
          <Experience ref={sectionRefs[2]} />
          <Skills ref={sectionRefs[3]} />
        </main>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
