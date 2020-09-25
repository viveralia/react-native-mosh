import React, { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppCard from "../components/@common/app-card";
import AppScreen from "../components/@common/app-screen";
import colors from "../config/colors";

const initialListings = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    price: 100,
    title: "Red jacket for sale",
  },
  {
    id: 2,
    image: require("../assets/jacket.jpg"),
    price: 1000,
    title: "Couch in great condition",
  },
];

const ListingsScreen: FC = () => {
  const [listings, setListings] = useState(initialListings);
  const [refreshing] = useState(false);

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        style={styles.list}
        renderItem={({ item: listing }) => (
          <AppCard
            title={listing.title}
            subTitle={"$" + listing.price}
            image={listing.image}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        refreshing={refreshing}
        onRefresh={() => {
          setListings([
            {
              id: 2,
              image: require("../assets/jacket.jpg"),
              price: 100,
              title: "Couch in great condition",
            },
          ]);
        }}
      />
    </AppScreen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  list: {
    paddingHorizontal: 20,
  },
});
