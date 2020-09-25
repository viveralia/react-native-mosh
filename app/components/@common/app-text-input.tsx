import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import defaultStyles from "../../config/styles";

export interface IAppTextInputProps extends TextInputProps {
  icon?: string;
  width?: number | string;
}

const AppTextInput: FC<IAppTextInputProps> = ({
  icon,
  width = "100%",
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

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
  textInput: defaultStyles.text,
});
