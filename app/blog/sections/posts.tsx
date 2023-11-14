import { Heading } from "@/app/components/heading";
import { PostPreview } from "../components/post-preview";
import { GetPostsPageQuery } from "@/app/gql/graphql";

interface PostsProps {
  posts: GetPostsPageQuery['posts'];
}

export const Posts = ({ posts }: PostsProps) => {
  if (!posts?.nodes) {
    return <p>No posts available yet.</p>;
  }

  return (
    <>
      <Heading text="I write about software development. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates suscipit sequi officia" />
      <div className="space-y-16">
        {posts.nodes.map((post, i) => (
          <PostPreview key={i} post={post} />
        ))}
      </div>
    </>
  );
};
