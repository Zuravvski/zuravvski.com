import { graphql } from "@/app/gql";

export const getSitemap = graphql(`
  query sitemap {
    posts(first: 99999) {
      nodes {
        slug
        date
        modified
      }
    }
    categories(first: 999999) {
      nodes {
        slug
      }
    }
  }
`);
