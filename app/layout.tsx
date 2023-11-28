import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getHomepageSeo } from "@/lib/home";
import { graphQlClient } from "@/lib/shared/core";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  const response = await graphQlClient.request(getHomepageSeo);

  return {
    title: response.seo?.meta?.homepage?.title,
    description: response.seo?.meta?.homepage?.description,
    openGraph: {
      type: "website",
      images:
        response.seo?.openGraph?.frontPage?.image?.mediaDetails?.sizes?.map(
          (x) => x!.sourceUrl!,
        ) ?? [],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-zinc-900 text-zinc-400")}>
        {children}
      </body>
    </html>
  );
}
