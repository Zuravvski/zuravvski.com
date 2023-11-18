import { MobileNavigation, Navigation } from "@/app/components/navigation";
import { PostFragment } from "@/app/gql/graphql";
import { Footer, Header } from "@/app/sections";
import { graphQlClient } from "@/app/shared/core/graphql-client";

import { getPost } from "../data-access/post-queries";

import { Post } from "./post";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export default async function Page({ params }: PostPageProps) {
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
        <div className="flex flex-col md:pl-3 my-8 lg:my-16">
          <main className="space-y-16 col-span-3 mx-auto max-w-2xl w-full">
            <Post post={viewModel!.post as PostFragment} />
          </main>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}
