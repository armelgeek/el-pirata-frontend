import axios, { AxiosError } from "axios";

import { CONFIG } from "@shared/config";
import { getToken } from "@shared/stores/session/helpers";
import { ApiError, InternalError } from "../error";
import { handleNetworkError } from "./handlers/network-error.handler";
import { handleNonAxiosError } from "./handlers/not-axios-error.handler";

const BASE_URL = `${CONFIG.baseURL}${CONFIG.pathApi}`;

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

http.interceptors.request.use((request) => {
  const data = JSON.stringify(request.data, null, 2);
  console.log(`[!] ${request.method?.toUpperCase()} ${request.url}`);
  console.log(`Body=${data}`);

  const token = getToken();
  if (token) {
    request.headers.Authorization = `Bearer ${token.accessToken}`;
  }

  return request;
});

http.interceptors.response.use(
  (config) => config,
  async (error) => {
    let data = null,
      status = 500;

    if (!(error instanceof AxiosError)) {
      return await handleNonAxiosError(error);
    }

    if ("response" in error && error.response) {
      data = error.response?.data;
      status = error.response?.status;
    }

    const isNetworkError = error.code === InternalError.ERR_NETWORK;
    if (isNetworkError) {
      return await handleNetworkError(data, status, error);
    }

    console.log("error", error);
    console.error("[!] GET UNHANDLED ERROR FROM API");

    return Promise.reject(new ApiError({ data, status, error }));
  }
);
