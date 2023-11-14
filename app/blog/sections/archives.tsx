import { Heading } from "@/app/components/heading";
import { Stylizable } from "@/app/types/stylizable";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ShowMore } from "@/app/shared/ui";
import { ArchiveQuery } from "@/app/gql/graphql";

type ArchivesProps = Stylizable<{
  archives: ArchiveQuery;
}>;

export const Archives = ({ archives, className }: ArchivesProps) => {
  if (!archives?.posts?.nodes?.length) {
    return <p>No archives available</p>;
  }

  const postsByMonth = archives.posts!.nodes
    .filter((post) => post.date)
    .reduce((aggregate, current) => {
      const actualDate = parseISO(current.date!);
      const yearMonth = new Date(
        actualDate.getFullYear(),
        actualDate.getMonth()
      ).toISOString();
      aggregate.set(yearMonth, (aggregate.get(yearMonth) ?? 0) + 1);
      return aggregate;
    }, new Map<string, number>())!;

  const entries = Array.from(
    postsByMonth,
    (entry) => ({ date: parseISO(entry[0]), count: entry[1] })
  ).sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <section className={clsx(className && className)}>
      <Heading as="h3" text="Archives" className="!text-lg text-zinc-300" />
      <ShowMore>
        <ul className="mt-2 space-y-2 text-sm">
          {entries.map((entry, i) => (
            <li key={i}>
              <Link
                href={`/blog/archives/${entry.date.getFullYear()}/${entry.date.getMonth() + 1}`}
                className="transition-colors hover:text-teal-500 flex items-center space-x-2"
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