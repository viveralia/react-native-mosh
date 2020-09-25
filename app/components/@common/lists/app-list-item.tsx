import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC, ReactNode } from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import defaultStyles from "../../../config/styles";
import AppText from "../app-text";

interface IAppListItemProps {
  image?: ImageSourcePropType;
  title: string;
  subTitle?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  renderRightActions?: any;
  IconComponent?: ReactNode;
  showChevron?: boolean;
}

const AppListItem: FC<IAppListItemProps> = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
  showChevron = false,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevron && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={defaultStyles.colors.medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default AppListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
    flexDirection: "row",
    padding: 12,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 12,
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  left: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
