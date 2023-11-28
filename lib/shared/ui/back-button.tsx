"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import { Stylizable } from "../types";

import { Button } from "./button";

type BackButtonProps = Stylizable;

export const BackButton = ({ className }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button
      className={clsx(
        "!rounded-full w-8 h-8 ring-1 ring-zinc-600/40",
        className && className,
      )}
      onClick={() => router.back()}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
  );
};
