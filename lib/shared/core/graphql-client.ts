import { GraphQLClient } from "graphql-request";

export const graphQlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_URL as string,
);
