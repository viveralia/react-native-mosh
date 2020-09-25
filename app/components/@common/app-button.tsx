import React, { FC } from "react";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import colors from "../../config/colors";

export interface IAppButtonProps {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  color?: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
}

const AppButton: FC<IAppButtonProps> = ({
  title,
  onPress,
  color = "primary",
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        color === "primary" ? styles.primary : styles.secondary,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
