import { parseISO } from "date-fns";
import { MetadataRoute } from "next";

import { getSitemap } from "./blog/data-access/sitemap-queries";
import { graphQlClient } from "./shared/core";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicSitemap = await graphQlClient.request(getSitemap);

  const postsSitemap =
    dynamicSitemap.posts?.nodes.map((post) => ({
      url: `${process.env.SITE_URL}/blog/${post.slug}`,
      lastModified: post.modified ?? post.date,
    })) ?? [];

  const categorySitemap =
    dynamicSitemap.categories?.nodes.map((category) => ({
      url: `${process.env.SITE_URL}/blog/categories/${category.slug}`,
    })) ?? [];

  const postsByMonth = dynamicSitemap.posts?.nodes
    .filter((post) => post.date)
    .reduce((aggregate, current) => {
      const actualDate = parseISO(current.date!);
      const yearMonth = new Date(
        actualDate.getFullYear(),
        actualDate.getMonth(),
      ).toISOString();
      aggregate.add(yearMonth);
      return aggregate;
    }, new Set<string>())!;

  const archiveSitemap = Array.from(postsByMonth).map((archive) => {
    const archiveDate = parseISO(archive);
    return {
      url: `${
        process.env.SITE_URL
      }/blog/archives/${archiveDate.getFullYear()}-${
        archiveDate.getMonth() + 1
      }`,
      lastModified: archiveDate,
    };
  });

  return [
    {
      url: process.env.SITE_URL as string,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL}/blog`,
      lastModified: new Date(),
    },
    ...postsSitemap,
    ...categorySitemap,
    ...archiveSitemap,
  ];
}
