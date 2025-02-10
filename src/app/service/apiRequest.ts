const API_URL = process.env.API_URL || 'http://localhost:3333';

export interface QueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  _page?: number;
  _limit?: number;
}

const defaultRequestOptions = { _page: 1, _limit: 10 };

export async function apiRequest(
  endpoint: string,
  query: QueryParams = {},
  options: RequestOptions = {}
) {
  const queryString: string = buildQueryString({
    ...query,
    ...defaultRequestOptions,
    ...options,
  });

  const response = await fetch(`${API_URL}/${endpoint}?${queryString}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

function buildQueryString(params: QueryParams) {
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, encodeURIComponent(String(value))]);

  return `${new URLSearchParams(Object.fromEntries(query)).toString()}`;
}
