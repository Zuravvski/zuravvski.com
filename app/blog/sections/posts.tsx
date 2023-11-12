import { Heading } from "@/app/components/heading";
import { PostPreviewViewModel } from "../data-access/post-preview";
import { PostPreview } from "../components/post-preview";

interface PostsProps {
  posts: PostPreviewViewModel[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <Heading text="I write about software development. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates suscipit sequi officia" />
      <div className="space-y-16">
        {posts.map((post, i) => (
          <PostPreview key={i} post={post} />
        ))}
      </div>
    </>
  );
};
