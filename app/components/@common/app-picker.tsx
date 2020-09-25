import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC, ReactNode, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import defaultStyles from "../../config/styles";
import AppPickerItem from "./app-picker-item";
import AppScreen from "./app-screen";
import AppText from "./app-text";

export interface IItem {
  label: string;
  value: number;
}

export interface IAppPickerProps {
  icon?: string;
  placeholder: string;
  items: IItem[];
  onSelectItem: (item: IItem) => void;
  selectedItem: IItem;
  PickerItemComponent?: ReactNode;
  width?: number | string;
  numberOfColumns?: number;
}

const AppPicker: FC<IAppPickerProps> = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  numberOfColumns = 1,
  PickerItemComponent = AppPickerItem as any,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={[styles.text, !selectedItem && styles.light]}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  light: {
    color: defaultStyles.colors.medium,
  },
  text: {
    flex: 1,
  },
  textInput: defaultStyles.text,
});
