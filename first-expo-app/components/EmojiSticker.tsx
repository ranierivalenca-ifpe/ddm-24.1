import { useState } from "react";
import { View, Image, ImageSourcePropType } from "react-native";

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: {
  imageSize: number;
  stickerSource: ImageSourcePropType;
}) {
  const [position] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });

  return (
    <View style={{ top: `${position.top}%`, left: `${position.left}%` }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
