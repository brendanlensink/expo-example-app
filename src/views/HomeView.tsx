import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../components";
import { AppDispatch, UserState, RootState, logout, login } from "../redux";

export const HomeView = () => {
  const dispatch: AppDispatch = useDispatch();
  const userState: UserState = useSelector((state: RootState) => state.user);

  const loggedInView = () => {
    return (
      <View>
        <Text>You're currently logged in!</Text>
        <PrimaryButton
          title={"Fake a log out!"}
          onPress={() => {
            dispatch(logout());
          }}
        />
      </View>
    );
  };

  const loggedOutView = () => {
    return (
      <PrimaryButton
        title={"Fake a log in!"}
        onPress={() => {
          const params = {
            email: "example@test.com",
            password: "i<3cats",
          };
          dispatch(login(params));
        }}
      />
    );
  };

  const body = () => {
    if (userState.isLoggedIn) {
      return loggedInView();
    } else {
      return loggedOutView();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Look mom, I made an app!</Text>
      {body()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
});
