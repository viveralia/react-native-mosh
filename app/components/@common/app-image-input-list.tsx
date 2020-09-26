import React, { FC, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AppImageInput from "./app-image-input";

interface IAppImageInputListProps {
  imageUris: string[];
  onAddImage: (uri: string) => void;
  onRemoveImage: (uri: string) => void;
}

const AppImageInputList: FC<IAppImageInputListProps> = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) => {
  const scrollView = useRef<any>(null);

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <AppImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
