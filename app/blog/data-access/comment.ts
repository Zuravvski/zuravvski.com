import { CommentFragment, Maybe } from "@/app/gql/graphql";
import { Optional } from "@/app/shared/core";

export type CommentViewModel = CommentFragment & { replies?: Maybe<CommentFragment[]> }
