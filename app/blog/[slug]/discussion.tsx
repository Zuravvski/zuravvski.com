"use client";

import { Stylizable } from "@/app/types/stylizable";
import { CommentViewModel } from "../data-access/comment";
import clsx from "clsx";
import { Heading } from "@/app/components/heading";
import { Comments } from "./comments";
import { TreeHelper } from "@/app/shared/core/tree-helper";
import { parseISO } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostApi } from "../data-access/posts-api";
import { Spinner } from "@/app/shared/ui";

interface FormData {
  name: string;
  comment: string;
}

export type DiscussionProps = Stylizable<{
  postId: number;
  comments: CommentViewModel[];
}>;

export const Discussion = ({
  postId,
  comments: originalComments,
  className,
}: DiscussionProps) => {
  const [replyTo, setReplyTo] = useState<CommentViewModel | null>(null);
  const [comments, setComments] = useState<CommentViewModel[]>();

  const reply = useCallback(
    (comment: CommentViewModel) => {
      if (replyTo !== comment) {
        setReplyTo(comment);
      }
    },
    [replyTo, setReplyTo]
  );

  useEffect(() => {
    const processedComments = TreeHelper.toTree(
      originalComments.sort(
        (a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime()
      ),
      (x) => x.id,
      (x) => x.parentId,
      "replies"
    );
    setComments(processedComments);
  }, [originalComments, setComments]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<FormData>();

  const canSubmit = !isDirty || !isValid || isSubmitting;

  const postComment: SubmitHandler<FormData> = async (data) => {
    await PostApi.createComment(postId, {
      author: {
        name: data.name,
      },
      content: data.comment,
      date: new Date().toISOString(),
      parentId: replyTo?.id ?? null,
    });
    setReplyTo(null);
    reset();
  };

  return (
    <section className={clsx(className && className)}>
      <Heading
        text={`Disscusion (${originalComments?.length ?? 0})`}
        as="h3"
        className="!text-xl font-semibold mb-4"
      />
      <form className="mb-6" onSubmit={handleSubmit(postComment)}>
        <div className="py-2 px-4 mb-4 rounded-lg border bg-zinc-800 border-zinc-700">
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            id="name"
            type="text"
            aria-label="name"
            className="focus:ring-0 focus:outline-none text-zinc-200 placeholder-zinc-400 bg-zinc-800"
            required
            placeholder="Your name"
            maxLength={50}
            disabled={isSubmitting}
            {...register("name", { required: true })}
          />
        </div>
        {replyTo && (
          <div
            className="my-2 -mt-2 text-sm cursor-pointer transition-colors hover:text-teal-500"
            onClick={() => setReplyTo(null)}
          >
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-zinc-800">
              <p className="mr-1">Replying to:</p>
              <p className="font-semibold mr-2">@{replyTo.author.name}</p>
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </div>
        )}
        <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border bg-zinc-800 border-zinc-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={6}
            className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none text-zinc-200 placeholder-zinc-400 bg-zinc-800"
            placeholder="Write a comment..."
            required
            aria-label="comment"
            disabled={isSubmitting}
            maxLength={1000}
            {...register("comment", { required: true })}
          ></textarea>
        </div>
        <button
          type="submit"
          className={clsx(
            "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-medium bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 group",
            canSubmit && "cursor-not-allowed"
          )}
          disabled={canSubmit}
        >
          Post comment
          {isSubmitting && <Spinner size="sm" />}
        </button>
      </form>
      <div className="overflow-x-auto">
        <Comments
          comments={comments ?? []}
          reply={reply}
          className="pt-1 pl-1"
        />
      </div>
    </section>
  );
};
