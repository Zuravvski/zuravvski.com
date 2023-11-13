interface GraphQlQueryRequest {
  query: string;
}

interface GraphQlResponse<T extends object> {
  data: T;
}

export async function graphQlMutation(
  query: GraphQlQueryRequest
): Promise<void> {
  const headers = { "Content-Type": "application/json" };

  await fetch("http://zuravvski.local/graphql", {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });
}

export async function graphQlQuery<T extends object>(
  query: GraphQlQueryRequest,
  nextConfig?: NextFetchRequestConfig
): Promise<GraphQlResponse<T>> {
  const headers = { "Content-Type": "application/json" };

  const response = await fetch(process.env.API_URL as string, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
    next: nextConfig,
  });

  return await response.json();
}

export const flattenGraphQlResponse = <TGraphQL extends object, TFlattened>(
  response: GraphQlResponse<TGraphQL> | GraphQlResponse<TGraphQL>
) => {
  if (!response) {
    return null;
  }

  const input = (response.data ? response.data : response) as TGraphQL & {
    [key: string]: any;
  };
  const output: any = {};

  for (const key in input) {
    if (input[key] && input[key].edges) {
      output[key] = input[key].edges.map((edge: any) =>
        flattenGraphQlResponse(edge.node)
      );
    } else if (input[key] && input[key].nodes) {
      output[key] = Object.keys(input[key].nodes).map((nodeKey) =>
        flattenGraphQlResponse(input[key].nodes[nodeKey])
      );
    } else if (input[key] && input[key].node) {
      output[key] = flattenGraphQlResponse(input[key].node);
    } else if (isObject(input[key])) {
      output[key] = flattenGraphQlResponse(input[key]);
    } else {
      output[key] = input[key];
    }
  }

  return output as TFlattened;
};

const isObject = (obj: any) => {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
};
