import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { FC, useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import defaultStyles from "../../config/styles";

interface IAppImageInputProps {
  imageUri?: string | null;
  onChangeImage: (selectedImageUri: string) => void;
}

const requestPermission = async () => {
  const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
  if (!granted) alert("You need to enable permission to access the camera");
};

const AppImageInput: FC<IAppImageInputProps> = ({
  imageUri,
  onChangeImage,
}) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.error("Error reading image");
    }
  };

  const handlePress = async () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          onPress: () => onChangeImage(""),
          text: "Yes",
        },
        { text: "No" },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={32}
            color={defaultStyles.colors.medium}
          />
        )}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
