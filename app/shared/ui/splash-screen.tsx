"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Optional } from "../core";

type PushStateInput = [data: any, unused: string, url: Optional<string | URL>];

export const SplashScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl) {
        setLoading(true);
      }
    };

    const handleMutation: MutationCallback = () => {
      const anchorElements: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll("a[href]");

      anchorElements.forEach((anchor) =>
        anchor.addEventListener("click", handleAnchorClick),
      );
    };

    const mutationObserver = new MutationObserver(handleMutation);

    mutationObserver.observe(document, { childList: true, subtree: true });

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray: PushStateInput) => {
        setLoading(false);
        return target.apply(thisArg, argArray);
      },
    });

    return () => {
      mutationObserver.disconnect();
      const anchorElements: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll("a[href]");
      anchorElements.forEach((anchor) =>
        anchor.removeEventListener("click", handleAnchorClick),
      );
    };
  }, []);

  return (
    loading && (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 grid place-items-center p-2">
        <Link href="/" className="block">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={200}
            height={100}
            className="animate-pulse"
          />
        </Link>
      </div>
    )
  );
};
