import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { format, parseISO } from "date-fns";
import Link from "next/link";

import { ArchiveQuery } from "@/lib/gql/graphql";
import { Stylizable } from "@/lib/shared/types";
import { Heading, ShowMore } from "@/lib/shared/ui";

type ArchivesProps = Stylizable<{
  archives: ArchiveQuery;
  activeArchive?: Date;
}>;

export const Archives = ({
  archives,
  activeArchive,
  className,
}: ArchivesProps) => {
  if (!archives?.posts?.nodes?.length) {
    return (
      <section className={clsx(className && className)}>
        <Heading as="h3" text="Archives" className="!text-lg text-zinc-300" />
        <p>No archives available</p>
      </section>
    );
  }

  const postsByMonth = archives
    .posts!.nodes.filter((post) => post.date)
    .reduce((aggregate, current) => {
      const actualDate = parseISO(current.date!);
      const yearMonth = new Date(
        actualDate.getFullYear(),
        actualDate.getMonth(),
      ).toISOString();
      aggregate.set(yearMonth, (aggregate.get(yearMonth) ?? 0) + 1);
      return aggregate;
    }, new Map<string, number>())!;

  const entries = Array.from(postsByMonth, (entry) => ({
    date: parseISO(entry[0]),
    count: entry[1],
  })).sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <section className={clsx(className && className)}>
      <Heading as="h3" text="Archives" className="!text-lg text-zinc-300" />
      <ShowMore>
        <ul className="mt-2 space-y-2 text-sm">
          {entries.map((entry, i) => (
            <li key={i}>
              <Link
                href={`/blog/archives/${entry.date.getFullYear()}-${
                  entry.date.getMonth() + 1
                }`}
                className={clsx(
                  "transition-colors hover:text-teal-500 flex items-center space-x-2",
                  entry.date.getTime() === activeArchive?.getTime() &&
                    "text-teal-500",
                )}
              >
                <FontAwesomeIcon icon={faBoxArchive} />
                <p>
                  {format(entry.date, "MMMM yyyy")} ({entry.count})
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </ShowMore>
    </section>
  );
};
