"use client";

import { useRef, useState } from "react";
import clsx from "clsx";

import { useOnClickOutside } from "../../hooks/on-click-outside";

import { NavigationItem } from "./navigation-item";
import { NavigationLink } from "./navigation-link";

interface MobileNavigationProps {
  links: NavigationLink[];
}

export const MobileNavigation = ({ links }: MobileNavigationProps) => {
  const [opened, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    if (opened) {
      setOpen(false);
    }
  });

  return (
    <>
      <button
        className={clsx(
          "group flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20",
          opened && "hidden",
        )}
        onClick={() => setOpen(true)}
      >
        Menu
        <svg
          viewBox="0 0 8 6"
          aria-hidden="true"
          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400"
        >
          <path
            d="M1.75 1.75 4 4.25l2.25-2.5"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div
        className={clsx(
          "fixed max-h-0 overflow-hidden transition-all backdrop-blur-sm bg-black/80 z-10",
          opened && "inset-0 max-h-full",
        )}
      >
        {opened && (
          <div
            ref={ref}
            className="rounded-lg ring-1 bg-zinc-900 ring-zinc-800 fixed inset-x-4 top-8 p-8"
          >
            <div className="flex justify-between mb-8">
              <p>Navigation</p>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 text-zinc-400"
                onClick={() => setOpen(false)}
              >
                <path
                  d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <ul className="flex flex-col font-medium -my-2 divide-y text-base divide-zinc-100/5 text-zinc-300">
              {links.map((link, i) => (
                <NavigationItem
                  key={`${link.href}-${i}`}
                  link={{
                    ...link,
                    onClick: () => {
                      setOpen(false);
                      link.onClick?.(link.href);
                    },
                  }}
                  className="px-0 py-0"
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
