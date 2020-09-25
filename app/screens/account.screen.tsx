import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import moshProfile from "../assets/mosh.jpg";
import AppIcon from "../components/@common/app-icon";
import AppScreen from "../components/@common/app-screen";
import { AppListItem, AppListItemSeparator } from "../components/@common/lists";
import colors from "../config/colors";

const menuItems = [
  {
    icon: {
      backgroundColor: colors.primary,
      name: "format-list-bulleted",
    },
    title: "My Listings",
  },
  {
    icon: {
      backgroundColor: colors.secondary,
      name: "email",
    },
    title: "My Messages",
  },
];

const AccountScreen: FC = () => {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <AppListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={moshProfile}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={AppListItemSeparator}
        />
      </View>
      <AppListItem
        title="Log Out"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </AppScreen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
