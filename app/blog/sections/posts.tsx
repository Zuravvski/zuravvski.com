import { GetPostsPageQuery } from "@/app/gql/graphql";

import { PostPreview } from "../components/post-preview";

interface PostsProps {
  posts: GetPostsPageQuery["posts"];
}

export const Posts = ({ posts }: PostsProps) => {
  if (!posts?.nodes.length) {
    return <p>No posts available yet.</p>;
  }

  return (
    <div className="space-y-16">
      {posts.nodes.map((post, i) => (
        <PostPreview key={i} post={post} />
      ))}
    </div>
  );
};
