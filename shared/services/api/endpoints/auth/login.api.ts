import { post } from "../../helpers";
import type { ApiResponse } from "../../type";
//import { User } from '@shared/types/entities';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = ApiResponse.Base<{
  accessToken: string;
  refreshToken: string;
  status: "COMPLETE" | "INCOMPLETE";
  //utilisateur: User.Entity;
}>;

export async function login(payload: LoginPayload) {
  return await post<LoginResponse, LoginPayload>({
    path: "authentification/sign-in",
    payload,
  });
}

export type LoginWithSocialResponse = ApiResponse.Base<{
  id: string;
  create: boolean;
  accessToken: string;
  refreshToken: string;
  //utilisateur: User.Partial;
}>;
