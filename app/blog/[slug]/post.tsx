import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faClock,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FeaturedImage } from "../components/featured-image";
import { format, parseISO } from "date-fns";
import { Heading } from "@/app/components/heading";
import Link from "next/link";
import { Chip } from "@/app/components/chip";
import { Discussion } from "./discussion";
import { getReadingTime } from "../data-access/reading-time";
import {
  CategoryFragment,
  CommentFragment,
  FeaturedImageFragment,
  PostFragment,
} from "@/app/gql/graphql";
import { getPostAuthor } from "../data-access/author";

interface PostProps {
  post: PostFragment;
}

export const Post = ({ post }: PostProps) => {
  if (!post) {
    return null;
  }

  const publishedAt = format(parseISO(post.date!), "LLLL d, yyyy");

  return (
    <div>
      <header>
        <Heading as="h1" text={post.title} className="mb-4" />
      </header>
      <div className="flex space-x-4 text-sm mb-4">
        <span className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <time dateTime={publishedAt}>{publishedAt}</time>
        </span>
        <span className="flex items-center">
          <FontAwesomeIcon icon={faComment} className="mr-2" />
          <p>{post.comments?.nodes?.length ?? 0}</p>
        </span>
        <span className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          <p>{getPostAuthor(post.author?.node)}</p>
        </span>
        <span className="flex items-center">
          <FontAwesomeIcon icon={faBookmark} className="mr-2" />
          <p>{getReadingTime(post.readingTime)}</p>
        </span>
      </div>
      <FeaturedImage
        postTitle={post.title!}
        featuredImage={post.featuredImage?.node as FeaturedImageFragment}
        className="mb-4"
      />
      <article
        className="space-y-6 blog-article mb-4"
        dangerouslySetInnerHTML={{ __html: post.content! }}
      ></article>
      <div className="mt-8 mb-4 bg-zinc-100/10 w-full h-[1px]"></div>
      {!!post.categories?.nodes.length && (
        <ul className="gap-0.5 md:gap-1 flex flex-wrap">
          {post.categories.nodes.map((category: CategoryFragment, i) => (
            <li key={i}>
              <Link
                href={`/blog/categories/${category.slug}`}
                className="transition-colors hover:text-teal-500"
              >
                <Chip
                  text={`${category.name}`}
                  className="bg-none bg-zinc-800 inline-block"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Discussion
        postId={post.databaseId}
        comments={post.comments?.nodes as CommentFragment[]}
        className="mt-4"
      />
    </div>
  );
};
