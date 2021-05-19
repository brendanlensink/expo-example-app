import { Action } from "redux";
import { createThunkRoutine, getThunkActionCreator } from "redux-thunk-routine";
import { clog } from "../../services/clog";
import { Environment, EnvService } from "../../services/";
import { UserService } from "../services/";
import {
  UserState,
  AccessToken,
  LOGIN,
  LOGOUT,
  SET_ENV,
} from "../types/user.types";

const initialState: UserState = {
  accessToken: undefined,
  isLoggedIn: false,
  user: undefined,
  environment: Environment.STAGING,
};

// Reducer

export default (
  state: UserState = initialState,
  action: Action<any>
): UserState => {
  switch (action.type) {
    case loginRoutine.SUCCESS:
      return {
        ...state,
        accessToken: loginRoutine.getSuccessPayload(action),
        isLoggedIn: true,
      };
    case logoutRoutine.SUCCESS:
      return {
        ...state,
        accessToken: undefined,
        isLoggedIn: false,
      };
    case setEnvironmentRoutine.SUCCESS:
      // TODO: do we even need to track state here?
      // I'm worried it will have some weird knock-on effect where something doesn't get updated if we don't.
      const payload = setEnvironmentRoutine.getSuccessPayload(action);
      clog.warn(`Environment set to: ${payload}`);
      EnvService.current().setEnv(payload);
      return {
        ...state,
        environment: payload,
      };
    default:
      return state;
  }
};

// Actions

const loginRoutine = createThunkRoutine<AccessToken>(LOGIN);
export const login = getThunkActionCreator(
  loginRoutine,
  async ({ email, password }: any) => {
    return await UserService.login(email, password);
  }
);

const logoutRoutine = createThunkRoutine<void>(LOGOUT);
export const logout = getThunkActionCreator(logoutRoutine, async () => {
  Promise.resolve();
});

const setEnvironmentRoutine = createThunkRoutine<Environment>(SET_ENV);
export const setEnvironment = getThunkActionCreator(
  setEnvironmentRoutine,
  async (env: Environment) => {
    return Promise.resolve(env);
  }
);
