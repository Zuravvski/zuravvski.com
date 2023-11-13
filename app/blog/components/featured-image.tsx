import Image from "next/image";
import { Stylizable } from "@/app/types/stylizable";
import clsx from "clsx";

import { FeaturedImageViewModel } from "../data-access/featured-image";

interface PostFeaturedImage {
  featuredImage: FeaturedImageViewModel;
  title: string;
  slug?: string;
}

type FeaturedImageProps = Stylizable<{
  post: PostFeaturedImage;
}>;

export const FeaturedImage = ({ post, className }: FeaturedImageProps) => {
  if (!post.featuredImage || !post.featuredImage?.mediaDetails?.sizes?.length) {
    return null;
  }

  const size = post.featuredImage.mediaDetails.sizes[0];
  return (
    <Image
      src={size.sourceUrl!}
      width={size.width}
      height={size.height}
      alt={post.title}
      className={clsx("w-full", className && className)}
    />
  );
};
