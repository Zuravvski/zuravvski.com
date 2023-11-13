import {
  flattenGraphQlResponse,
  graphQlMutation,
  graphQlQuery,
} from "@/app/graph-ql/graph-ql-request";
import { PostsPageGraphQlResponse } from "./post-preview";
import { PostsPageViewModel } from "./post-preview";
import { ArchiveGraphQlResponse, ArchiveViewModel } from "./archive";
import { PostPageGraphQlResponse, PostPageViewModel } from "./post";
import { CommentViewModel } from "./comment";

export class PostApi {
  static async getPostsPage(
    nextConfig?: NextFetchRequestConfig
  ): Promise<PostsPageViewModel | null> {
    const query = {
      query: `query getPostsPage {
        posts {
          nodes {
            author {
              node {
                firstName
                lastName
                username
                description
              }
            }
            title
            slug
            date
            commentCount
            excerpt
            featuredImage {
              node {
                mediaDetails {
                  sizes {
                    sourceUrl
                    width
                    height
                  }
                }
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            readingTime {
              readingTime
            }
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
      }`,
    };

    const response = await graphQlQuery<PostsPageGraphQlResponse>(
      query,
      nextConfig
    );

    return flattenGraphQlResponse<PostsPageGraphQlResponse, PostsPageViewModel>(
      response
    );
  }

  static async getArchive(
    nextConfig?: NextFetchRequestConfig
  ): Promise<ArchiveViewModel | null> {
    const query = {
      query: `
        query archive {
          posts(first: 999999) {
            nodes {
              date
            }
          }
        }`,
    };

    const response = await graphQlQuery<ArchiveGraphQlResponse>(
      query,
      nextConfig
    );
    return flattenGraphQlResponse<ArchiveGraphQlResponse, ArchiveViewModel>(
      response
    );
  }

  static async getPost(
    slug: string,
    nextConfig?: NextFetchRequestConfig
  ): Promise<PostPageViewModel | null> {
    const query = {
      query: `
          query post {
            post(id: "${slug}", idType: SLUG) {
              databaseId
              content
              author {
                node {
                  lastName
                  firstName
                  description
                  username
                }
              }
              title
              date
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      width
                      height
                      sourceUrl
                    }
                  }
                }
              }
              comments {
                nodes {
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
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
              readingTime {
                readingTime
              }
            }
          }
        `,
    };

    const response = await graphQlQuery<PostPageGraphQlResponse>(
      query,
      nextConfig
    );

    return flattenGraphQlResponse<PostPageGraphQlResponse, PostPageViewModel>(
      response
    );
  }

  static async createComment(
    postId: number,
    comment: Omit<CommentViewModel, "id" | "replies">
  ): Promise<void> {
    const query = {
      query: `
        mutation createComment {
          createComment(
            input: {date: "${comment.date}", content: "${comment.content}", parent: "${comment.parentId}", author: "${comment.author.name}", commentOn: ${postId}}
          ) {
            clientMutationId
            success
          }
        }
      `,
    };

    await graphQlMutation(query);
  }
}
