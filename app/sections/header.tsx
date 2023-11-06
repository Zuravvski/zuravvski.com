"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";

import { Stylizable } from "../types/stylizable";
import { useEffect, useRef, useState } from "react";

type HeaderProps = Stylizable<{
  navigation: React.ReactNode;
  mobileNavigation?: React.ReactNode;
}>;

export const Header = ({
  className,
  navigation,
  mobileNavigation,
}: HeaderProps) => {
  const [sticky, setSticky] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const clientHeight = ref.current?.clientHeight ?? 0;
      setSticky(window.scrollY >= clientHeight);
    };

    handleScroll();
    if (ref.current) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <header
      ref={ref}
      className={clsx(
        "transition-colors duration-350 ease-in",
        sticky && "sticky top-0 bg-zinc-950 z-10 py-2",
        !sticky && "pt-8",
        className && className
      )}
    >
      <div className="lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center px-8 md:px-12 mx-auto">
        <Link href="/" className="hidden md:block">
          <Image src={"/logo.png"} alt="Logo" width={200} height={100} />
        </Link>
        <div className="hidden lg:block">{navigation}</div>
        <div className="flex items-center justify-end space-x-2">
          <div className="lg:hidden">{mobileNavigation}</div>
          <ul className="text-xl flex space-x-2 items-center">
            <li className="group w-10 h-10 flex justify-center items-center ring-1 ring-white/10 transition hover:ring-white/20 rounded-full bg-zinc-800/90 cursor-pointer">
              <Link href="https://github.com/Zuravvski" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-400 group-hover:text-zinc-100 transition-colors"
                />
              </Link>
            </li>
            <li className="group w-10 h-10 flex justify-center items-center ring-1 ring-white/10 transition hover:ring-white/20 rounded-full bg-zinc-800/90 cursor-pointer">
              <Link href="https://linkedin.com/in/Zuravvski" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-400 group-hover:text-zinc-100 transition-colors"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
