import { graphql } from "@/app/gql";

export const authorFragment = graphql(`
  fragment Author on User {
    lastName
    firstName
    description
    username
  }
`);

export const categoryFragment = graphql(`
  fragment Category on Category {
    name
    slug
  }
`);

export const featuredImageFragment = graphql(`
  fragment FeaturedImage on MediaItem {
    mediaDetails {
      sizes {
        width
        height
        sourceUrl
      }
    }
  }
`);

export const commentFragment = graphql(`
  fragment Comment on Comment {
    id
    content
    date
    author {
      node {
        name
      }
    }
    parentId
  }
`);

export const postFragment = graphql(`
  fragment Post on Post {
    databaseId
    content
    author {
      node {
        ...Author
      }
    }
    title
    date
    featuredImage {
      node {
        ...FeaturedImage
      }
    }
    comments {
      nodes {
        ...Comment
      }
    }
    categories {
      nodes {
        ...Category
      }
    }
    readingTime {
      readingTime
    }
  }
`);

export const postPreviewFragment = graphql(`
  fragment PostPreview on Post {
    author {
      node {
        ...Author
      }
    }
    title
    slug
    date
    commentCount
    excerpt
    featuredImage {
      node {
        ...FeaturedImage
      }
    }
    categories {
      nodes {
        ...Category
      }
    }
    readingTime {
      readingTime
    }
  }
`);
