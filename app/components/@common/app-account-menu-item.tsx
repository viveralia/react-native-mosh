import React, { FC, ReactNode } from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import AppText from "./app-text";

export interface IAppAcountMenuItemProps {
  icon: ReactNode;
  title: string;
}

const AppAccountMenuItem: FC<IAppAcountMenuItemProps> = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
};

export default AppAccountMenuItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 12,
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 18,
    height: 35,
    justifyContent: "center",
    marginRight: 10,
    width: 35,
  },
  title: {
    fontWeight: "600",
  },
});
