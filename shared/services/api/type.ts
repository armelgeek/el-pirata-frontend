import type { AxiosRequestConfig } from "axios";

export namespace Params {
  type DefaultParams = {
    path: string;
    token?: string;
    signal?: AbortSignal;
    params?: Record<string, string | number>;
    headers?: AxiosRequestConfig["headers"];
  };
  export type Get = DefaultParams;

  export type Post<T> = DefaultParams & {
    payload: T;
  };

  export type Put<T> = DefaultParams & {
    payload: T;
  };

  export type Patch<T> = DefaultParams & {
    payload: T;
  };

  export type Delete = DefaultParams;
}

export namespace ApiResponse {
  export type Error<T> = {
    data: T;
    status: number;
    error: unknown;
  };

  export type Base<T> = {
    data: T;
    message: string;
    isError: boolean;
  };

  export type List<T> = Base<{
    items: T[];
    hasNext: boolean;
    totalCount: number;
  }>;
}
