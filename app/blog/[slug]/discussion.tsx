"use client";

import { Stylizable } from "@/app/types/stylizable";
import clsx from "clsx";
import { Heading } from "@/app/components/heading";
import { Comments } from "./comments";
import { TreeHelper } from "@/app/shared/core/tree-helper";
import { parseISO } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Spinner } from "@/app/shared/ui";
import { graphQlClient } from "@/app/shared/core/graphql-client";
import { createComment } from "../data-access/comment-queries";
import { CommentViewModel } from "../data-access/comment";

interface FormData {
  name: string;
  comment: string;
}

interface SubmissionStatus {
  text: string;
  success: boolean;
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
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus | null>(null);

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
        (a, b) => parseISO(a.date!).getTime() - parseISO(b.date!).getTime()
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

  const canSubmit = isDirty && isValid && !isSubmitting;

  const postComment: SubmitHandler<FormData> = async (data) => {
    const response = await graphQlClient.request(createComment, {
      input: {
        author: data.name,
        content: data.comment,
        date: new Date().toISOString(),
        parent: replyTo?.id ?? null,
        commentOn: postId,
      },
    });
    const status = response.createComment?.success
      ? "Your comment is waiting for an approval"
      : "Oops! Something went wrong.";

    setSubmissionStatus({
      text: status,
      success: response.createComment?.success ?? false,
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
      {submissionStatus && (
        <div
          className={clsx(
            "flex items-center px-4 py-1.5 mb-4 bg-zinc-800 rounded-md ring-1 text-sm",
            {
              ["ring-teal-500/30 text-teal-500"]: submissionStatus.success,
              ["ring-rose-500/30 text-rose-500"]: !submissionStatus.success,
            }
          )}
        >
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          <p>{submissionStatus.text}</p>
          <FontAwesomeIcon
            icon={faXmark}
            className="ml-auto cursor-pointer"
            onClick={() => setSubmissionStatus(null)}
          />
        </div>
      )}
      <form className="mb-6" onSubmit={handleSubmit(postComment)}>
        <div className="py-2 px-4 mb-4 rounded-lg border bg-zinc-800 border-zinc-700">
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            id="name"
            type="text"
            aria-label="name"
            className="w-full focus:ring-0 focus:outline-none text-zinc-200 placeholder-zinc-400 bg-zinc-800 autofill:text-fill-zinc-200 autofill:shadow-[inset_0_0_0px_1000px_rgb(39,39,42)]"
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
              <p className="font-semibold mr-2">@{replyTo.author!.node.name}</p>
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
        <Button
          type="submit"
          className={clsx({
            ["!cursor-default"]: !canSubmit,
            ["cursor-pointer"]: canSubmit,
          })}
          disabled={!canSubmit}
        >
          Post comment
          {isSubmitting && <Spinner size="sm" />}
        </Button>
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
