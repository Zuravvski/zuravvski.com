"use client";

import { useState } from "react";
import clsx from "clsx";
import { OnLoad, OnLoadingComplete } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";

import { Spinner } from "./spinner";

export const LoadedImage = (props: ImageProps) => {
  const [loading, setLoading] = useState(true);

  const onLoadingComplete: OnLoad = (img) => {
    setLoading(false);
    props.onLoad?.(img);
  };

  return (
    <div className="relative">
      {loading && (
        <Spinner
          size="md"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
      )}
      <div className={clsx(loading && "blur-sm")}>
        {
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image
            onLoad={onLoadingComplete}
            className={clsx(
              props.className && props.className,
              "transition-opacity duration-300",
              {
                "opacity-0 ": loading,
                "opacity-100": !loading,
              },
            )}
            {...props}
          />
        }
      </div>
    </div>
  );
};
