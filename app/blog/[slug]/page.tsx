import { MobileNavigation, Navigation } from "@/app/components/navigation";
import { Footer, Header } from "@/app/sections";
import { Post } from "./post";
import { graphQlClient } from "@/app/shared/core/graphql-client";
import { getPost } from "../data-access/post-queries";

interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export default async function Page({ params }: Params) {
  const viewModel = await graphQlClient.request(getPost, { id: params.slug });

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
        <div className="flex flex-col pl-3 my-8 lg:my-16">
          <main className="space-y-16 col-span-3 mx-auto max-w-2xl w-full">
            <Post post={viewModel!.post} />
          </main>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}