export interface DispatchArgs {
  method: HTTPMethods;
  url: string;
  data?: BodyInit | object;
  config?: FetcherConfig;
  onError?: OnErrorHandler;
}

export interface FetcherRequestArgs {
  url: string;
  config?: FetcherConfig;
  data?: BodyInit | object;
}

export interface FetcherBodylessRequestArgs {
  url: string;
  config?: FetcherConfig;
}

export interface FetcherConstructorArgs {
  baseURL?: string;
  defaultHeaders?: Record<string, string>;
  onError?: OnErrorHandler;
}

export type HTTPMethods =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export interface FetcherConfig {
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  integrity?: string;
  keepalive?: boolean;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  signal?: AbortSignal | null;
  window?: null;
}

export interface FetcherResponse<T = unknown> {
  url: string;
  headers: Headers;
  status: number;
  statusText: string;
  data: T;
}

export type ErrorResult = { statusCode: number | null };
export type OnErrorHandler = (result: ErrorResult) => void;