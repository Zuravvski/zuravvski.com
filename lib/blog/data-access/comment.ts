import { CommentFragment, Maybe } from "@/lib/gql/graphql";

export type CommentViewModel = CommentFragment & {
  replies?: Maybe<CommentFragment[]>;
};
