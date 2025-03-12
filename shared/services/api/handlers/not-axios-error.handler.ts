import { ApiError } from "@shared/services/error";

export function handleNonAxiosError(error: unknown) {
  console.error(" >  NOT AXIOS ERROR", JSON.stringify(error, null, 3));
  return Promise.reject(
    new ApiError({
      data: null,
      status: -1,
      error,
    })
  );
}
