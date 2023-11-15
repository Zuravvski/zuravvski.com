import { graphql } from "../../gql";

export const getPostsPage = graphql(`
  query getPostsPage($first: Int, $last: Int, $before: String, $after: String) {
    posts(
      first: $first
      last: $last
      before: $before
      after: $after
      where: { orderby: { field: DATE, order: DESC } }
    ) {
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
    categories(first: 999999) {
      nodes {
        ...Category
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

export const getArchivesPage = graphql(`
  query getArchivesPage(
    $year: Int!
    $month: Int!
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    posts(
      first: $first
      last: $last
      before: $before
      after: $after
      where: {
        dateQuery: { year: $year, month: $month }
        orderby: { field: DATE, order: DESC }
      }
    ) {
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
    categories(first: 999999) {
      nodes {
        ...Category
      }
    }
  }
`);

export const getCategoriesPage = graphql(`
  query getCategoriesPage(
    $category: String!
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    posts(
      first: $first
      last: $last
      before: $before
      after: $after
      where: {
        categoryName: $category
        orderby: { field: DATE, order: DESC }
      }
    ) {
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
    categories(first: 999999) {
      nodes {
        ...Category
      }
    }
  }
`);
