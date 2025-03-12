import { AxiosError } from "axios";

import { ApiError, InternalError } from "@shared/services/error";

export async function handleNetworkError(
  data: unknown,
  status: number,
  error: AxiosError
) {
  if (error && error.code === InternalError.ERR_NETWORK) {
    return Promise.reject(
      new InternalError({
        errorCode: error.code,
        message: error.message,
      })
    );
  }
  return Promise.reject(new ApiError({ data, status, error }));
}
