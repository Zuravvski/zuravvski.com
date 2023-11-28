import { format } from "date-fns";

import { getArchive, getArchivesPage } from "@/lib/blog";
import { Archives } from "@/lib/blog/post/archives";
import { Categories } from "@/lib/blog/post/categories";
import { Posts } from "@/lib/blog/post/posts";
import {
  getPagingParams,
  graphQlClient,
  SearchParams,
} from "@/lib/shared/core";
import {
  Footer,
  Header,
  MobileNavigation,
  Navigation,
} from "@/lib/shared/layout";
import { Heading, Paginator } from "@/lib/shared/ui";

interface ArchivePageProps {
  params: {
    slug: string;
  };
  searchParams: SearchParams;
}

export default async function Page({ params, searchParams }: ArchivePageProps) {
  const [year, month] = params.slug.split("-").map((x) => parseInt(x) || 1);

  const postsViewModel = await graphQlClient.request(getArchivesPage, {
    ...getPagingParams(searchParams),
    year,
    month,
  });
  const archiveViewModel = await graphQlClient.request(getArchive);
  const activeArchive = new Date(year, month - 1);

  return (
    <>
      <Header
        navigation={
          <Navigation
            links={[
              { href: "/#about", name: "About" },
              { href: "/#offer", name: "Offer" },
              {
                href: "/#experience",
                name: "Experience",
              },
              { href: "/#skills", name: "Skills" },
              { href: "/blog", name: "Blog" },
            ]}
          />
        }
        mobileNavigation={
          <MobileNavigation
            links={[
              { href: "/#about", name: "About" },
              { href: "/#offer", name: "Offer" },
              {
                href: "/#experience",
                name: "Experience",
              },
              { href: "/#skills", name: "Skills" },
              { href: "/blog", name: "Blog" },
            ]}
          />
        }
      ></Header>
      <div className="lg:max-w-6xl container mx-auto flex flex-col min-h-screen py-0 md:py-8 px-8 md:px-12">
        <div className="grid lg:grid-cols-4 md:pl-3 my-8 lg:my-16">
          <main className="space-y-8 lg:space-y-16 lg:col-span-3">
            <Heading text={`Archives: ${format(activeArchive, "LLLL yyyy")}`} />
            <Posts posts={postsViewModel.posts} />
            <Paginator pageInfo={postsViewModel.posts?.pageInfo} />
          </main>
          <aside className="lg:pl-8 space-y-8 mt-8 lg:mt-0 lg:top-[100px] lg:sticky lg:h-[calc(100vh_-_100px)] overflow-auto">
            <Categories categories={postsViewModel.categories?.nodes ?? []} />
            <Archives
              archives={archiveViewModel!}
              activeArchive={activeArchive}
            />
          </aside>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
