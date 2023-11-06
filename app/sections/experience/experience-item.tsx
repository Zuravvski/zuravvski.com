"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { Chip, DevIcon, DevIconType } from "../../components";
import { WithChildren } from "../../types/with-children";

interface Skill {
  icon: DevIconType;
  tooltip?: string;
}

type ExperienceItemProps = WithChildren<{
  name: string;
  position: string;
  skills: Skill[];
  tags?: string[];
  from: string;
  to?: string;
  url?: string;
}>;

export const ExperienceItem = ({
  position,
  from,
  to,
  skills,
  url,
  name,
  tags,
  children,
}: ExperienceItemProps) => {
  const [hovered, setHovered] = useState(false);

  const onHover = (state: boolean) => setHovered(state);
  const nameComponent = (
    <h3
      className={clsx(
        "text-base tracking-tight text-zinc-400 font-semibold",
        url && "hover:text-teal-500 cursor-pointer transition-colors"
      )}
    >
      {name}
    </h3>
  );

  return (
    <article className="lg:grid md:grid-cols-4 lg:items-baseline">
      <div className="relative">
        <span
          className={clsx(
            "absolute w-6 h-6 hidden md:flex items-center justify-center ring-1 ring-zinc-900/5 border border-zinc-700/50 rounded-full bg-zinc-800 left-[-36px] top-[2px]",
            to && "text-zinc-500"
          )}
        >
          <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3" />
        </span>
        {url && (
          <Link href={url} target="_blank">
            {nameComponent}
          </Link>
        )}
        {!url && <>{nameComponent}</>}
        <time className="mt-1 md:block mb-3 flex items-center text-sm text-zinc-500 relative">
          {from} - {to ?? "Present"}
        </time>
      </div>
      <div
        className="md:col-span-3 group relative flex flex-col items-start"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <span className="absolute -inset-x-4 -inset-y-6 z-[-1] scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></span>
        <h2 className="text-base font-semibold tracking-tight text-zinc-100">
          {position}
        </h2>
        <div className="mt-2 text-sm text-zinc-400 space-y-6">{children}</div>
        {!!tags?.length && (
          <ul className="mt-6 gap-1 md:gap-2 flex flex-wrap">
            {tags.map((tag, i) => (
              <li key={i}>
                <Chip
                  text={`#${tag}`}
                  className="bg-none bg-zinc-700 inline-block"
                />
              </li>
            ))}
          </ul>
        )}
        <ul
          className={clsx(
            "text-center text-2xl flex mt-4 gap-3 flex-wrap",
            !!tags?.length && "mt-6"
          )}
        >
          {skills.map((skill, i) => (
            <DevIcon key={i} icon={skill.icon} colored={hovered} tooltip={skill.tooltip}></DevIcon>
          ))}
        </ul>
      </div>
    </article>
  );
};
