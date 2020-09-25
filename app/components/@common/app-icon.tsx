import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { View } from "react-native";

interface IAppIconProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const AppIcon: FC<IAppIconProps> = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor,
        borderRadius: size / 2,
        height: size,
        justifyContent: "center",
        width: size,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default AppIcon;
