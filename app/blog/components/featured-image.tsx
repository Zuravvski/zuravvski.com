import clsx from "clsx";
import Image from "next/image";

import { FeaturedImageFragment, Maybe, Post } from "@/app/gql/graphql";
import { Stylizable } from "@/app/types/stylizable";

type FeaturedImageProps = Stylizable<{
  postTitle: string;
  featuredImage: Maybe<FeaturedImageFragment>;
}>;

export const FeaturedImage = ({
  postTitle,
  featuredImage,
  className,
}: FeaturedImageProps) => {
  if (!featuredImage?.mediaDetails?.sizes?.length) {
    return null;
  }

  const size = featuredImage.mediaDetails.sizes[0]!;

  return (
    <Image
      src={size.sourceUrl!}
      width={+size.width!}
      height={+size.height!}
      alt={postTitle}
      className={clsx("w-full", className && className)}
    />
  );
};
