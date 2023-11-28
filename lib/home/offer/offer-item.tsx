import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OfferItemProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export const OfferItem = ({ icon, title, description }: OfferItemProps) => {
  return (
    <li className="relative group flex flex-col items-start">
      <span className="absolute -inset-x-4 -inset-y-6 z-[-1] scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></span>
      <i className="w-12 h-12 flex items-center justify-center ring-1 ring-zinc-900/5 border border-zinc-700/50 rounded-full bg-zinc-800">
        <FontAwesomeIcon
          icon={icon}
          className="w-5 h-5 text-zinc-100 group-hover:text-teal-500 transition-colors"
        />
      </i>
      <h2 className="text-zinc-100 mt-4 md:mt-6 text-base font-semibold">
        {title}
      </h2>
      <p className="mt-2 text-sm">{description}</p>
    </li>
  );
};
