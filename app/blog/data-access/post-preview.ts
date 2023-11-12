import { GraphQlNodes } from "@/app/graph-ql/graph-ql-node";
import { AuthorViewModel } from "./author";
import { FeaturedImageViewModel } from "./featured-image";
import { CategoryViewModel } from "./category";
import { PageInfo } from "./page-info";

export interface PostsPageGraphQlResponse {
  posts: GraphQlNodes<any>; // deliberate any
  categories: GraphQlNodes<any>; // deliberate any
  pageInfo: PageInfo;
}

export interface PostPreviewViewModel {
  author: AuthorViewModel;
  title: string;
  slug: string;
  date: string;
  commentCount: number;
  excerpt: string;
  featuredImage: FeaturedImageViewModel;
  categories: CategoryViewModel[];
}

export interface PostsPageViewModel {
  posts: PostPreviewViewModel[];
  pageInfo: PageInfo;
  categories: CategoryViewModel[];
}
