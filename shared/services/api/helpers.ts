import { AxiosResponse } from "axios";
import { Params } from "./type";
import { http } from "./client";

function getHeaders(token?: string) {
  const header: Record<string, string> = {};
  // handle authorization
  if (token) {
    header.Authorization = `Bearer ${token}`;
  }

  return header;
}

export async function get<R>(params: Params.Get): Promise<R> {
  const { path, token, signal, headers = {} } = params;
  const response = await http.get<R>(path, {
    headers: { ...getHeaders(token), ...headers },
    params: params.params,
    signal,
  });
  return response.data;
}

export async function post<R, P>(params: Params.Post<P>): Promise<R> {
  const { path, token, signal, headers = {}, payload } = params;
  const response = await http.post<R, AxiosResponse<R>, P>(path, payload, {
    headers: { ...getHeaders(token), ...headers },
    signal,
  });
  return response.data;
}

export async function put<R, P>(params: Params.Put<P>): Promise<R> {
  const { path, token, signal, headers = {}, payload } = params;
  const response = await http.put(path, payload, {
    headers: { ...getHeaders(token), ...headers },
    signal,
  });
  return response.data;
}

export async function remove<R>(params: Params.Delete): Promise<R> {
  const { path, token, signal, headers = {} } = params;
  const res = await http.delete(path, {
    headers: { ...getHeaders(token), ...headers },
    signal,
  });
  return res.data;
}

export async function patch<R, P>(params: Params.Patch<P>): Promise<R> {
  const { path, token, signal, headers = {}, payload } = params;
  const response = await http.patch<R, AxiosResponse<R>, P>(path, payload, {
    headers: { ...getHeaders(token), ...headers },
    signal,
  });
  return response.data;
}
