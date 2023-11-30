import clsx from "clsx";

import { FeaturedImageFragment, Maybe } from "@/lib/gql/graphql";

import { Stylizable } from "../types/stylizable";

import { LoadedImage } from "./loaded-image";

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
    <LoadedImage
      src={size.sourceUrl!}
      width={+size.width!}
      height={+size.height!}
      alt={postTitle}
      className={clsx("w-full", className && className)}
      priority
    />
  );
};
