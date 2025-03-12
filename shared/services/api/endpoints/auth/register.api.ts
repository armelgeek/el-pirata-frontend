import { post } from "../../helpers";
import type { ApiResponse } from "../../type";
export type RegisterPayload = {
  email: string;
  password: string;
  username: string;
};

export type RegisterResponse = ApiResponse.Base<
  { create: true } | { create?: false; message: string }
>;

export async function register(payload: RegisterPayload) {
  return await post<RegisterResponse, RegisterPayload>({
    path: "inscription/new",
    payload,
  });
}

export type ValidateAccountResponse = ApiResponse.Base<{
  validation: boolean;
  expired: boolean;
  userNotFound: boolean;
  accessToken: string;
  refreshToken: string;
  deviceToken: string;
}>;

export type ValidateAccountPayload = {
  code: string;
  email: string;
};
