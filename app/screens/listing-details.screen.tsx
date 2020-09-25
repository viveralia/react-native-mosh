import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import image from "../assets/jacket.jpg";
import AppText from "../components/@common/app-text";
import { AppListItem } from "../components/@common/lists";
import colors from "../config/colors";

const ListingDetailsScreen: FC = () => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <AppListItem
            image={image}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 7,
  },
  userContainer: {
    marginVertical: 40,
  },
});
