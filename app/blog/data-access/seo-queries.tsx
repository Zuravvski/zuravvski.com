import { graphql } from "@/app/gql";

export const getHomepageSeo = graphql(`
  query siteMetadata {
    seo {
      meta {
        homepage {
          title
          description
        }
      }
      openGraph {
        frontPage {
          image {
            mediaDetails {
              sizes {
                width
                height
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`);
