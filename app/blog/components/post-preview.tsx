import { format, parseISO } from "date-fns";
import { PostPreviewViewModel } from "../data-access/post-preview";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faClock,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { AuthorViewModel } from "../data-access/author";
import { FeaturedImage } from "./featured-image";
import { getReadingTime } from "../data-access/reading-time";

interface PostPreviewProps {
  post: PostPreviewViewModel;
}

export const PostPreview = ({ post }: PostPreviewProps) => {
  const publishedAt = format(parseISO(post.date), "LLLL d, yyyy");

  const getPostAuthor = (author?: AuthorViewModel) => {
    if (!author?.username) {
      return "Anonymous";
    }
    const fullName = `${author.firstName} ${author.lastName}`.trim();
    return fullName.length === 0 ? "Anonymous" : fullName;
  };

  return (
    <article className="relative group">
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
      <Link href={`/blog/${post.slug}`} className="isolate">
        <h2 className="text-zinc-100 text-xl font-semibold block mb-2">
          {post.title}
        </h2>
        <div className="flex space-x-4 text-sm mb-4">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            <time dateTime={publishedAt}>{publishedAt}</time>
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faComment} className="mr-2" />
            <p>{post.commentCount ?? 0}</p>
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <p>{getPostAuthor(post.author)}</p>
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faBookmark} className="mr-2" />
            <p>{getReadingTime(post.readingTime)}</p>
          </span>
        </div>
        <FeaturedImage post={post} className="mb-4" />
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <p className="flex items-center font-medium text-teal-500">
          Read more
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </p>
      </Link>
    </article>
  );
};
