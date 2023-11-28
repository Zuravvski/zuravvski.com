import { getArchive, getCategoriesPage } from "@/lib/blog";
import { Archives } from "@/lib/blog/post/archives";
import { Categories } from "@/lib/blog/post/categories";
import { Posts } from "@/lib/blog/post/posts";
import { CategoryFragment } from "@/lib/gql/graphql";
import {
  getPagingParams,
  graphQlClient,
  Optional,
  SearchParams,
} from "@/lib/shared/core";
import {
  Footer,
  Header,
  MobileNavigation,
  Navigation,
} from "@/lib/shared/layout";
import { Heading, Paginator } from "@/lib/shared/ui";

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams: SearchParams;
}

export default async function Page({
  params,
  searchParams,
}: CategoryPageProps) {
  const postsViewModel = await graphQlClient.request(getCategoriesPage, {
    ...getPagingParams(searchParams),
    category: params.slug,
  });
  const archiveViewModel = await graphQlClient.request(getArchive);
  const activeCategory: Optional<CategoryFragment> =
    postsViewModel.categories?.nodes.find(
      (x: CategoryFragment) => x.slug === params.slug,
    );

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
            <Heading text={`Category: ${activeCategory?.name}`} />
            <Posts posts={postsViewModel.posts} />
            <Paginator pageInfo={postsViewModel.posts?.pageInfo} />
          </main>
          <aside className="lg:pl-8 space-y-8 mt-8 lg:mt-0 lg:top-[100px] lg:sticky lg:h-[calc(100vh_-_100px)] overflow-auto">
            <Categories
              categories={postsViewModel.categories?.nodes ?? []}
              activeCategory={activeCategory?.slug}
            />
            <Archives archives={archiveViewModel!} />
          </aside>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
