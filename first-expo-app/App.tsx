import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Img from "./components/Img";
import Button from "./components/Button";
import { Theme } from "./Theme";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const imagePlaceholder = require("./assets/images/background-image.png");

const pickImageAsync =
  (
    callback: (result: ImagePicker.ImagePickerSuccessResult) => void,
    rejection?: (result: ImagePicker.ImagePickerResult) => void,
  ) =>
  async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      callback(result);
    } else {
      (rejection && rejection(result)) ??
        alert("You did not select any image.");
    }
  };

export default function App() {
  const [image, setImage] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const mainButtons = (
    <>
      <Button
        label="Choose a photo"
        icon={{ name: "picture-o" }}
        onPress={pickImageAsync((result) => {
          setImage(result.assets[0].uri);
          setShowOptions(true);
        })}
      />
      <Button label="set photo" onPress={() => setShowOptions(true)} />
      <Button label="remove photo" onPress={() => setImage(null)} />
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Img source={image!} placeholder={imagePlaceholder} />
        {/* <Img /> */}
      </View>
      {showOptions ? <View /> : mainButtons}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
