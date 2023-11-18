import { WithChildren } from "../../types/with-children";

import { SkillBar } from "./skill-bar";

interface KeySkill {
  level: "intermediate" | "advanced" | "expert";
  skill: string;
  proficiency: number;
}

type SkillItemProps = WithChildren<{
  title: string;
  type: string;
  related: string[];
  skills: KeySkill[];
  primaryBackgroundClass?: string;
  primaryTextClass?: string;
}>;

export const SkillItem = ({
  title,
  type,
  skills,
  related,
  children,
  primaryBackgroundClass = "bg-teal-600",
  primaryTextClass = "text-teal-500",
}: SkillItemProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-700/40 rounded-lg p-4 md:p-8">
      <span
        className={`${primaryTextClass} bg-zinc-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2`}
      >
        <svg
          className="w-2.5 h-2.5 mr-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
        {type}
      </span>
      <h2 className="text-zinc-100 text-2xl font-semibold mb-2">{title}</h2>
      <div className="space-y-4 text-sm tracking-wide">{children}</div>
      {!!skills?.length && (
        <div className="space-y-2 mt-3">
          <p className="font-semibold text-zinc-200 flex items-center text-sm mb-2">
            My main weapons
          </p>
          {skills.map((skill, i) => (
            <SkillBar
              key={i}
              level={skill.level}
              skill={skill.skill}
              proficiency={skill.proficiency}
              progressColorClass={primaryBackgroundClass}
            />
          ))}
        </div>
      )}
      {!!skills?.length && (
        <>
          <p className="font-semibold text-zinc-200 mt-3 mb-2 text-sm">
            Related stuff I have worked with
          </p>
          <div className="flex gap-1.5 flex-wrap text-zinc-400 text-xs font-medium">
            {related.map((item, i) => (
              <span
                key={i}
                className="bg-zinc-800 inline-flex items-center px-2.5 py-0.5 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
