/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  mutation createComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      clientMutationId\n      success\n    }\n  }\n":
    types.CreateCommentDocument,
  "\n  fragment Author on User {\n    lastName\n    firstName\n    description\n    username\n  }\n":
    types.AuthorFragmentDoc,
  "\n  fragment Category on Category {\n    name\n    slug\n  }\n":
    types.CategoryFragmentDoc,
  "\n  fragment FeaturedImage on MediaItem {\n    mediaDetails {\n      sizes {\n        width\n        height\n        sourceUrl\n      }\n    }\n  }\n":
    types.FeaturedImageFragmentDoc,
  "\n  fragment Comment on Comment {\n    id\n    content\n    date\n    author {\n      node {\n        name\n      }\n    }\n    parentId\n  }\n":
    types.CommentFragmentDoc,
  "\n  fragment Post on Post {\n    databaseId\n    content\n    author {\n      node {\n        ...Author\n      }\n    }\n    title\n    date\n    featuredImage {\n      node {\n        ...FeaturedImage\n      }\n    }\n    comments {\n      nodes {\n        ...Comment\n      }\n    }\n    categories {\n      nodes {\n        ...Category\n      }\n    }\n    readingTime {\n      readingTime\n    }\n  }\n":
    types.PostFragmentDoc,
  "\n  fragment PostPreview on Post {\n    author {\n      node {\n        ...Author\n      }\n    }\n    title\n    slug\n    date\n    commentCount\n    excerpt\n    featuredImage {\n      node {\n        ...FeaturedImage\n      }\n    }\n    categories {\n      nodes {\n        ...Category\n      }\n    }\n    readingTime {\n      readingTime\n    }\n  }\n":
    types.PostPreviewFragmentDoc,
  "\n  query getPostsPage($first: Int, $last: Int, $before: String, $after: String) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: { orderby: { field: DATE, order: DESC } }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n":
    types.GetPostsPageDocument,
  "\n  query post($id: ID!) {\n    post(id: $id, idType: SLUG) {\n      ...Post\n    }\n  }\n":
    types.PostDocument,
  "\n  query archive {\n    posts(first: 999999) {\n      nodes {\n        date\n      }\n    }\n  }\n":
    types.ArchiveDocument,
  "\n  query getArchivesPage(\n    $year: Int!\n    $month: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: {\n        dateQuery: { year: $year, month: $month }\n        orderby: { field: DATE, order: DESC }\n      }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n":
    types.GetArchivesPageDocument,
  "\n  query getCategoriesPage(\n    $category: String!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: {\n        categoryName: $category\n        orderby: { field: DATE, order: DESC }\n      }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n":
    types.GetCategoriesPageDocument,
  "\n  query siteMetadata {\n    seo {\n      meta {\n        homepage {\n          title\n          description\n        }\n      }\n      openGraph {\n        frontPage {\n          image {\n            mediaDetails {\n              sizes {\n                width\n                height\n                sourceUrl\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n":
    types.SiteMetadataDocument,
  "\n  query sitemap {\n    posts(first: 99999) {\n      nodes {\n        slug\n        date\n        modified\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        slug\n      }\n    }\n  }\n":
    types.SitemapDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation createComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      clientMutationId\n      success\n    }\n  }\n",
): (typeof documents)["\n  mutation createComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      clientMutationId\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Author on User {\n    lastName\n    firstName\n    description\n    username\n  }\n",
): (typeof documents)["\n  fragment Author on User {\n    lastName\n    firstName\n    description\n    username\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Category on Category {\n    name\n    slug\n  }\n",
): (typeof documents)["\n  fragment Category on Category {\n    name\n    slug\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment FeaturedImage on MediaItem {\n    mediaDetails {\n      sizes {\n        width\n        height\n        sourceUrl\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment FeaturedImage on MediaItem {\n    mediaDetails {\n      sizes {\n        width\n        height\n        sourceUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Comment on Comment {\n    id\n    content\n    date\n    author {\n      node {\n        name\n      }\n    }\n    parentId\n  }\n",
): (typeof documents)["\n  fragment Comment on Comment {\n    id\n    content\n    date\n    author {\n      node {\n        name\n      }\n    }\n    parentId\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Post on Post {\n    databaseId\n    content\n    author {\n      node {\n        ...Author\n      }\n    }\n    title\n    date\n    featuredImage {\n      node {\n        ...FeaturedImage\n      }\n    }\n    comments {\n      nodes {\n        ...Comment\n      }\n    }\n    categories {\n      nodes {\n        ...Category\n      }\n    }\n    readingTime {\n      readingTime\n    }\n  }\n",
): (typeof documents)["\n  fragment Post on Post {\n    databaseId\n    content\n    author {\n      node {\n        ...Author\n      }\n    }\n    title\n    date\n    featuredImage {\n      node {\n        ...FeaturedImage\n      }\n    }\n    comments {\n      nodes {\n        ...Comment\n      }\n    }\n    categories {\n      nodes {\n        ...Category\n      }\n    }\n    readingTime {\n      readingTime\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PostPreview on Post {\n    author {\n      node {\n        ...Author\n      }\n    }\n    title\n    slug\n    date\n    commentCount\n    excerpt\n    featuredImage {\n      node {\n        ...FeaturedImage\n      }\n    }\n    categories {\n      nodes {\n        ...Category\n      }\n    }\n    readingTime {\n      readingTime\n    }\n  }\n",
): (typeof documents)["\n  fragment PostPreview on Post {\n    author {\n      node {\n        ...Author\n      }\n    }\n    title\n    slug\n    date\n    commentCount\n    excerpt\n    featuredImage {\n      node {\n        ...FeaturedImage\n      }\n    }\n    categories {\n      nodes {\n        ...Category\n      }\n    }\n    readingTime {\n      readingTime\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getPostsPage($first: Int, $last: Int, $before: String, $after: String) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: { orderby: { field: DATE, order: DESC } }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getPostsPage($first: Int, $last: Int, $before: String, $after: String) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: { orderby: { field: DATE, order: DESC } }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query post($id: ID!) {\n    post(id: $id, idType: SLUG) {\n      ...Post\n    }\n  }\n",
): (typeof documents)["\n  query post($id: ID!) {\n    post(id: $id, idType: SLUG) {\n      ...Post\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query archive {\n    posts(first: 999999) {\n      nodes {\n        date\n      }\n    }\n  }\n",
): (typeof documents)["\n  query archive {\n    posts(first: 999999) {\n      nodes {\n        date\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getArchivesPage(\n    $year: Int!\n    $month: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: {\n        dateQuery: { year: $year, month: $month }\n        orderby: { field: DATE, order: DESC }\n      }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getArchivesPage(\n    $year: Int!\n    $month: Int!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: {\n        dateQuery: { year: $year, month: $month }\n        orderby: { field: DATE, order: DESC }\n      }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getCategoriesPage(\n    $category: String!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: {\n        categoryName: $category\n        orderby: { field: DATE, order: DESC }\n      }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n",
): (typeof documents)["\n  query getCategoriesPage(\n    $category: String!\n    $first: Int\n    $last: Int\n    $before: String\n    $after: String\n  ) {\n    posts(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      where: {\n        categoryName: $category\n        orderby: { field: DATE, order: DESC }\n      }\n    ) {\n      nodes {\n        ...PostPreview\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        ...Category\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query siteMetadata {\n    seo {\n      meta {\n        homepage {\n          title\n          description\n        }\n      }\n      openGraph {\n        frontPage {\n          image {\n            mediaDetails {\n              sizes {\n                width\n                height\n                sourceUrl\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query siteMetadata {\n    seo {\n      meta {\n        homepage {\n          title\n          description\n        }\n      }\n      openGraph {\n        frontPage {\n          image {\n            mediaDetails {\n              sizes {\n                width\n                height\n                sourceUrl\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query sitemap {\n    posts(first: 99999) {\n      nodes {\n        slug\n        date\n        modified\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        slug\n      }\n    }\n  }\n",
): (typeof documents)["\n  query sitemap {\n    posts(first: 99999) {\n      nodes {\n        slug\n        date\n        modified\n      }\n    }\n    categories(first: 999999) {\n      nodes {\n        slug\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
