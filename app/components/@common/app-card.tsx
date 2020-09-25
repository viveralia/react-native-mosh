import React, { FC } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

import colors from "../../config/colors";
import AppText from "./app-text";

interface IAppCardProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

const AppCard: FC<IAppCardProps> = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} resizeMode="cover" source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
});
