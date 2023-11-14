import { graphql } from "../../gql";

export const getPostsPage = graphql(`
  query getPostsPage {
    posts {
      nodes {
        ...PostPreview
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
    categories(first: 40) {
      nodes {
        name
        slug
      }
    }
  }
`);

export const getPost = graphql(`
  query post($id: ID!) {
    post(id: $id, idType: SLUG) {
      ...Post
    }
  }
`);

export const getArchive = graphql(`
  query archive {
    posts(first: 999999) {
      nodes {
        date
      }
    }
  }
`);
