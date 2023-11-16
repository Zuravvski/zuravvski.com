import { Stylizable } from "@/app/types/stylizable";
import clsx from "clsx";
import { Comment } from "./comment";
import { CommentViewModel } from "../data-access/comment";

type CommentsProps = Stylizable<{
  comments: CommentViewModel[];
  reply: (comment: CommentViewModel) => void;
}>;

export const Comments = ({ comments, reply, className }: CommentsProps) => {
  return (
    <ul
      className={clsx(
        "list-none space-y-4 divide-y divide-zinc-100/10",
        className && className
      )}
    >
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} reply={reply} />
      ))}
    </ul>
  );
};
