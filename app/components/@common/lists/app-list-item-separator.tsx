import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../../config/colors";

const AppListItemSeparator: FC = () => {
  return <View style={styles.separator} />;
};

export default AppListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.light,
    height: 1,
    width: "100%",
  },
});
