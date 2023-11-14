import { Maybe, Post_Readingtime } from "@/app/gql/graphql";

export const getReadingTime = (readingTime?: Maybe<Post_Readingtime>) => {
  const time = (readingTime?.readingTime) ?? 0;
  return `${time} ${time === 1 ? 'min' : 'mins'}`;
}
