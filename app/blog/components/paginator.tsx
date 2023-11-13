import { Button } from "@/app/shared/ui";
import { PageInfo } from "../data-access/page-info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface PaginatorProps {
  pageInfo: PageInfo;
}

export const Paginator = ({ pageInfo }: PaginatorProps) => {
  return (
    <section className="flex items-center">
      <Button>
        <FontAwesomeIcon icon={faArrowLeft} />
        Newer posts
      </Button>
      <Button className="ml-auto">
        Older posts
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </section>
  );
};
