import { AuthorFragment } from "@/app/gql/graphql";

export const getPostAuthor = (author?: AuthorFragment) => {
  if (!author?.username) {
    return "Anonymous";
  }
  const fullName = `${author.firstName} ${author.lastName}`.trim();
  return fullName.length === 0 ? "Anonymous" : fullName;
};
