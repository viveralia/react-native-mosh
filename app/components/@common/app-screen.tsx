import Constants from "expo-constants";
import React, { FC } from "react";
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

export interface IAppScreenProps {
  style?: StyleProp<ViewStyle>;
}

const AppScreen: FC<IAppScreenProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.innerScreen, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  innerScreen: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
