import type { InternalAxiosRequestConfig } from "axios";

/**
 * Used to extends our request..
 *
 */
export function isRequest(
  request: unknown | undefined
): request is InternalAxiosRequestConfig<unknown> & { _retry: boolean } {
  if (!request) {
    return false;
  }
  if (!("_retry" in request)) {
    request._retry = false;
  }
  return true;
}
