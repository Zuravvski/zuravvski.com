export interface SearchParams {
  [key: string]: string;
}

export interface PagingParams {
  first?: number;
  last?: number;
  before?: string;
  after?: string;
}

const DefaultPageSize = 10;

export function getPagingParams(searchParams?: SearchParams, pageSize = DefaultPageSize): PagingParams {
  if (!searchParams) {
    return { first: pageSize };
  } else if (searchParams.before) {
    return { last: pageSize, before: searchParams.before };
  } else if (searchParams.after) {
    return { first: pageSize, after: searchParams.after };
  } else {
    return { first: pageSize };
  }
}
