import * as React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Theme from "../../constants/Theme";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, View } from "react-native";

type IButtonProps = {
  title: String;
  onPress: () => void;
};
export type ButtonProps = IButtonProps &
  View["props"] &
  TouchableOpacity["props"];

export const PrimaryButton = (props: ButtonProps) => {
  const theme = Theme[useColorScheme()];
  const { title, onPress } = props;

  const styles = StyleSheet.create({
    button: {
      color: theme.colors.primary,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius,
      width: "100%",
      opacity: props.disabled ? 0.5 : 1,
      height: 44,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: Theme.dark.margin.horizontal,
      margin: Theme.dark.spacing.s,
    },
    text: {
      color: theme.colors.onPrimary,
    },
  });

  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, props.style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
