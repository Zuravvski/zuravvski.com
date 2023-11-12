import { GraphQlNodes } from "@/app/graph-ql/graph-ql-node";

export interface ArchiveGraphQlResponse {
  posts: GraphQlNodes<any>
}

export interface ArchiveViewModel {
  posts: { date: string | null }[];
}

export interface ArchiveEntry {
  date: Date;
  count: number;
}
