import { Heading } from "@/app/components/heading";
import { Stylizable } from "@/app/types/stylizable";
import { Chip } from "@/app/components/chip";
import clsx from "clsx";

import Link from "next/link";
import { ShowMore } from "@/app/shared/ui";
import { GetPostsPageQuery } from "@/app/gql/graphql";

type CategoriesProps = Stylizable<{
  categories: GetPostsPageQuery['categories'];
}>;

export const Categories = ({ categories, className }: CategoriesProps) => {
  if (!categories?.nodes) {
    return <p>No categories available</p>
  }

  return (
    <section className={clsx(className && className)}>
      <Heading as="h3" text="Categories" className="!text-lg text-zinc-300" />
      <ShowMore>
        <ul className="mt-2 gap-0.5 md:gap-1 flex flex-wrap">
          {categories.nodes.map((category, i) => (
            <li key={i}>
              <Link
                href={`/blog/categories/${category.slug}`}
                className="transition-colors hover:text-teal-500"
              >
                <Chip
                  text={`#${category.name}`}
                  className="transition-colors bg-none bg-zinc-700/90 hover:bg-zinc-700 inline-block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </ShowMore>
    </section>
  );
};
