import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import {
  AppDispatch,
  login,
  logout,
  persistor,
  RootState,
  store,
  UserState,
} from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { HomeView } from "./views/HomeView";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeView />
        <StatusBar />
      </PersistGate>
    </Provider>
  );
}
