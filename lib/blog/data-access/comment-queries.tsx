import { graphql } from "@/lib/gql";

export const createComment = graphql(`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      clientMutationId
      success
    }
  }
`);
