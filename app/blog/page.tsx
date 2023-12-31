import {
  Archives,
  blogLinks,
  Categories,
  getArchive,
  getPostsPage,
  Posts,
} from "@/lib/blog";
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

interface BlogPageProps {
  searchParams?: SearchParams;
}

export const revalidate = 10;

export default async function Blog({ searchParams }: BlogPageProps) {
  const postsViewModel = await graphQlClient.request(
    getPostsPage,
    getPagingParams(searchParams),
  );
  const archiveViewModel = await graphQlClient.request(getArchive);

  return (
    <>
      <Header
        navigation={<Navigation links={blogLinks} />}
        mobileNavigation={<MobileNavigation links={blogLinks} />}
      ></Header>
      <div className="lg:max-w-6xl container mx-auto flex flex-col min-h-screen py-0 md:py-8 px-8 md:px-12">
        <div className="grid lg:grid-cols-4 md:pl-3 my-8 lg:my-16 lg:gap-16">
          <main className="space-y-8 lg:space-y-16 lg:col-span-3">
            <Heading text="Step into my digital domain, where I focus on software development aspects that I find interesting." />
            <Posts posts={postsViewModel.posts} />
            <Paginator pageInfo={postsViewModel.posts?.pageInfo} />
          </main>
          <aside className="space-y-8 mt-8 lg:mt-0 lg:top-[100px] lg:sticky lg:h-[calc(100vh_-_100px)] overflow-auto">
            <Categories categories={postsViewModel.categories?.nodes ?? []} />
            <Archives archives={archiveViewModel!} />
          </aside>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
