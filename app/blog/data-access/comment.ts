import { CommentFragment, Maybe } from "@/app/gql/graphql";

export type CommentViewModel = CommentFragment & {
  replies?: Maybe<CommentFragment[]>;
};
