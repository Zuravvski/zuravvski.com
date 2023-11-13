import { GraphQlNode } from "@/app/graph-ql/graph-ql-node";
import { AuthorViewModel } from "./author";
import { FeaturedImageViewModel } from "./featured-image";
import { CommentViewModel } from "./comment";
import { CategoryViewModel } from "./category";
import { ReadingTimeViewModel } from "./reading-time";

export interface PostPageGraphQlResponse {
  post: GraphQlNode<any>; // deliberate any
}

export interface PostViewModel {
  databaseId: number;
  author: AuthorViewModel;
  title: string;
  content: string;
  date: string;
  featuredImage: FeaturedImageViewModel;
  comments: CommentViewModel[];
  categories: CategoryViewModel[];
  readingTime: ReadingTimeViewModel;
}

export interface PostPageViewModel {
  post: PostViewModel;
}
