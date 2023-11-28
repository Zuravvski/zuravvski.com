import clsx from "clsx";

interface SkillBarProps {
  skill: string;
  proficiency: number;
  level: string;
  progressColorClass?: string;
}

export const SkillBar = ({
  skill,
  proficiency,
  level,
  progressColorClass,
}: SkillBarProps) => {
  const labelOffset = 20;

  return (
    <div className="flex items-center w-full rounded-md bg-zinc-800 text-xs text-zinc-100 whitespace-nowrap relative">
      <div
        className={clsx(
          "md:bg-zinc-700 rounded-l-md px-3 flex",
          progressColorClass ? progressColorClass : "bg-teal-600",
        )}
        style={{ width: `${labelOffset}%` }}
      >
        <p className="absolute md:static top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0">
          {skill}
        </p>
        &nbsp;
      </div>
      <div
        className={clsx(
          "rounded-r-md text-center",
          progressColorClass ? progressColorClass : "bg-teal-600",
        )}
        style={{ width: `${proficiency - labelOffset}%` }}
      >
        <p className="hidden md:block absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2">
          {level}
        </p>
        &nbsp;
      </div>
    </div>
  );
};
