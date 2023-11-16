"use client"

import { Button } from "@/app/shared/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PageInfo } from "@/app/gql/graphql";
import { usePathname, useRouter } from "next/navigation";

interface PaginatorProps {
  pageInfo?: PageInfo;
}

export const Paginator = ({ pageInfo }: PaginatorProps) => {
  const router = useRouter();
  const pathname = usePathname();
  
  if (!pageInfo || (!pageInfo.hasNextPage && !pageInfo.hasPreviousPage)) {
    return null;
  }

  const previous = () => {
    const params = pageInfo.startCursor 
      ? new URLSearchParams({ before: pageInfo.startCursor })
      : null;
    
    const query = params ? `?${params.toString()}` : '';
    router.push(`${pathname}${query.toString()}`);
  }

  const next = () => {
    const params = pageInfo.endCursor 
      ? new URLSearchParams({ after: pageInfo.endCursor })
      : null;
    
    const query = params ? `?${params.toString()}` : '';
    router.push(`${pathname}${query.toString()}`);
  }

  return (
    <section className="flex items-center">
      {pageInfo?.hasPreviousPage && (
        <Button onClick={previous}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Newer posts
        </Button>
      )}
      {pageInfo?.hasNextPage && (
        <Button onClick={next} className="ml-auto">
          Older posts
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      )}
    </section>
  );
};
