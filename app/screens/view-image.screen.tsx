import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import image from "../assets/chair.jpg";
import colors from "../config/colors";

const ViewImageScreen: FC = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={[styles.icon, styles.close]}
        name="window-close"
        size={35}
        color={colors.white}
      />
      <MaterialCommunityIcons
        style={[styles.icon, styles.delete]}
        name="trash-can-outline"
        size={35}
        color={colors.white}
      />
      <Image resizeMode="contain" source={image} style={styles.image} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  close: {
    left: 20,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  delete: {
    right: 20,
  },
  icon: {
    position: "absolute",
    top: 40,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
