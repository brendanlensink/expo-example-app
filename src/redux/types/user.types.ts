import { Environment } from "../../services/EnvironmentService";

export interface AccessToken {
  access_token: string;
  token_type: string;
  created_at: number;
}

export interface User {
  id: string;
  avatarUrl: string | undefined;
  name: string;
  email: string;
}

export interface UserState {
  accessToken: AccessToken | undefined;
  user: User | undefined;
  isLoggedIn: boolean;
  environment: Environment;
}

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_ENV = "SET_ENV";
