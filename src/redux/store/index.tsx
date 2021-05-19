import { createStore, applyMiddleware, Action, AnyAction } from "redux";
import { rootReducer, RootState } from "../reducers";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const middleware = applyMiddleware(thunk);

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, middleware);
export let persistor = persistStore(store);

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
