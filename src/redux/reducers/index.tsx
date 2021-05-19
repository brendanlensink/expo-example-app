import { combineReducers } from "redux";

import * as loadState from "./loadState.reducer";
import * as userState from "./user.reducer";

export * from "./loadState.reducer";
export * from "./user.reducer";

export const rootReducer = combineReducers({
  loadState: loadState.default,
  user: userState.default,
});

export type RootState = ReturnType<typeof rootReducer>;
