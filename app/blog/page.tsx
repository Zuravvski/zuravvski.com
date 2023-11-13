import { Navigation, MobileNavigation } from "@/app/components/navigation";
import { Footer, Header } from "@/app/sections";

import { Archives, Categories, Posts } from "./sections";
import { PostApi } from "./data-access/posts-api";
import { Paginator } from "./components/paginator";

export default async function Blog() {
  const postsViewModel = await PostApi.getPostsPage({ revalidate: 10 });
  const archiveViewModel = await PostApi.getArchive({ revalidate: 10 });

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
        <div className="grid lg:grid-cols-4 pl-3 my-8 lg:my-16">
          <main className="space-y-16 col-span-3">
            <Posts posts={postsViewModel.posts ?? []} />
            <Paginator pageInfo={postsViewModel.pageInfo} />
          </main>
          <aside className="lg:pl-8 space-y-8 mt-8 lg:mt-0 lg:top-[100px] lg:sticky lg:h-[calc(100vh_-_100px)] overflow-auto">
            <Categories categories={postsViewModel.categories ?? []} />
            <Archives archives={archiveViewModel!}/>
          </aside>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
