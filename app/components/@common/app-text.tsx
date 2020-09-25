import React, { FC } from "react";
import { Text, TextProps } from "react-native";

import defaultStyles from "../../config/styles";

const AppText: FC<TextProps> = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
