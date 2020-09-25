import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import colors from "../../../config/colors";

interface IAppListItemDeleteActionProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const AppListItemDeleteAction: FC<IAppListItemDeleteActionProps> = ({
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.danger,
    justifyContent: "center",
    width: 70,
  },
});
