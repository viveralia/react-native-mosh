import React, { FC } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export interface IAppContainerProps {
  style?: StyleProp<ViewStyle>;
}

const AppContainer: FC<IAppContainerProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
});

export default AppContainer;
