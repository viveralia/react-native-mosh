import React, { FC } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import AppText from "./app-text";

export interface IItem {
  label: string;
}

export interface IAppPickerItemProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  item: IItem;
}

const AppPickerItem: FC<IAppPickerItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default AppPickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
