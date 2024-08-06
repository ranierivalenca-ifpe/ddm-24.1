import { StatusBar } from "expo-status-bar";
import {
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Img from "./components/Img";
import Button from "./components/Button";
import { Theme } from "./Theme";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import CircleButton from "components/CircleButton";
import EmojiPicker from "components/EmojiPicker";
import EmojiList from "components/EmojiList";
import EmojiSticker from "components/EmojiSticker";

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
  const [emojiPickerVisible, setEmojiPickerVisible] = useState<boolean>(false);
  const [pickedEmojis, setPickedEmojis] = useState<ImageSourcePropType[]>([]);

  const onReset = () => {
    setShowOptions(false);
  };

  const onAddSticker = () => {
    setEmojiPickerVisible(true);
  };

  const onModalClose = () => {
    setEmojiPickerVisible(false);
  };

  const onSaveImageAsync = () => {};

  const mainButtons = (
    <View style={styles.footerContainer}>
      <Button
        label="Choose a photo"
        border={{ color: "yellow", width: 4 }}
        icon={{ name: "picture-o" }}
        onPress={pickImageAsync((result) => {
          setImage(result.assets[0].uri);
          setShowOptions(true);
        })}
      />
      <Button label="set photo" onPress={() => setShowOptions(true)} />
      <Button label="remove photo" onPress={() => setImage(null)} />
    </View>
  );

  const optionsButtons = (
    <View style={styles.optionsContainer}>
      <EmojiPicker isVisible={emojiPickerVisible} onClose={onModalClose}>
        <EmojiList
          onSelect={(item) => {
            console.log({ item });
            // setPickedEmoji(item);
            pickedEmojis.push(item);
            setPickedEmojis([...pickedEmojis]);
            console.log({ pickedEmojis });
          }}
          onCloseModal={onModalClose}
        />
      </EmojiPicker>

      <View style={styles.optionsRow}>
        <Button icon={{ name: "refresh" }} label="Reset" onPress={onReset} />
        <CircleButton onPress={onAddSticker} />
        <Button
          icon={{ type: "MaterialIcons", name: "save-alt" }}
          label="Save"
          onPress={onSaveImageAsync}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Img source={image!} placeholder={imagePlaceholder} />
        <View style={styles.stickersContainer}>
          {/* <EmojiSticker
            imageSize={40}
            stickerSource={require("./assets/images/emoji1.png")}
          /> */}
          {pickedEmojis.map((emoji, index) => (
            <EmojiSticker key={index} imageSize={40} stickerSource={emoji} />
          ))}
        </View>
        {/* <Img /> */}
      </View>
      {showOptions ? optionsButtons : mainButtons}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
    alignItems: "center",
  },
  imageContainer: {
    flex: 2 / 3,
    position: "relative",
    // paddingTop: 58,
  },
  stickersContainer: {
    position: "absolute",
    overflow: "hidden",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },

  optionsContainer: {
    position: "absolute",
    bottom: 80,
    width: "100%",
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
