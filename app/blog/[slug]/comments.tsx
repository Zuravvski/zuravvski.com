import clsx from "clsx";

import { Stylizable } from "@/app/types/stylizable";

import { CommentViewModel } from "../data-access/comment";

import { Comment } from "./comment";

type CommentsProps = Stylizable<{
  comments: CommentViewModel[];
  reply: (comment: CommentViewModel) => void;
}>;

export const Comments = ({ comments, reply, className }: CommentsProps) => {
  return (
    <ul
      className={clsx(
        "list-none space-y-4 divide-y divide-zinc-100/10",
        className && className,
      )}
    >
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} reply={reply} />
      ))}
    </ul>
  );
};
