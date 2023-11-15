import { format, parseISO } from "date-fns";
import { CommentViewModel } from "../data-access/comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import { Stylizable } from "@/app/types/stylizable";
import clsx from "clsx";
import { Comments } from "./comments";

type CommentProps = Stylizable<{
  comment: CommentViewModel;
  reply: (comment: CommentViewModel) => void;
}>;

export const Comment = ({ comment, reply, className }: CommentProps) => {
  return (
    <li className={clsx("not-first:pt-4", className && className)}>
      <div className="flex items-center mb-2">
        <span className="bg-zinc-600 ring-1 ring-zinc-600 rounded-full w-6 h-6 p-2 flex items-center justify-center text-sm mr-2">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className="font-semibold text-zinc-200 mr-4">
          {comment.author?.node.name}
        </span>
        <time dateTime={comment.date!}>
          {format(parseISO(comment.date!), "LLL MM, yyyy")}
        </time>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: comment.content! }}
        className="mb-2"
      ></p>
      <button className="flex items-center text-sm hover:underline">
        <FontAwesomeIcon icon={faMessage} className="mr-2" />
        <a onClick={() => reply(comment)}>Reply</a>
      </button>
      {!!comment.replies?.length && (
        <Comments
          comments={comment.replies}
          reply={reply}
          className="mt-4 pl-8 lg:pl-16 divide-y-0"
        />
      )}
    </li>
  );
};
