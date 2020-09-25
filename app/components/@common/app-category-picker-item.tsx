import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import AppIcon from "./app-icon";
import { IItem } from "./app-picker";
import { IAppPickerItemProps } from "./app-picker-item";
import AppText from "./app-text";

export interface ICategoryItem extends IItem {
  backgroundColor: string;
  icon: string;
}

export interface IAppCategoryPickerItemProps extends IAppPickerItemProps {
  item: ICategoryItem;
}

const AppCategoryPickerItem: FC<IAppCategoryPickerItemProps> = ({
  item,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label} numberOfLines={1}>
        {item.label}
      </AppText>
    </View>
  );
};

export default AppCategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
