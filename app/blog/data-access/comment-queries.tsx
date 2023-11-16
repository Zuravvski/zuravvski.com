import { graphql } from "@/app/gql";

export const createComment = graphql(`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      clientMutationId
      success
    }
  }
`);
