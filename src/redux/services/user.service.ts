import { EnvService } from "../../services/";
import { AccessToken } from "../types/";
import { loggableRequest } from "./loggableRequest";

export const UserService = {
  login,
};

async function login(email: string, password: string): Promise<AccessToken> {
  const fakeAccessToken = {
    access_token: "1a2a3a4a",
    token_type: "",
    created_at: -1,
  };
  return Promise.resolve(fakeAccessToken);
  // return loggableRequest(
  //   EnvService.env().apiUrl +
  //     `/login?username=${email}&password=${password}&grant_type=password`,
  //   "POST",
  //   {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   }
  // ).then((response: any) => {
  //   if (response["error_description"] !== undefined) {
  //     throw new Error();
  //   }
  //   return response;
  // });
}
