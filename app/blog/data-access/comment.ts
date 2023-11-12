export interface CommentViewModel {
  id: string;
  date: string;
  author: { name: string };
  replies: CommentViewModel[] | null;
  content: string;
  parentId: string | null;
}
