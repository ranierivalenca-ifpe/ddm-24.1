import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Img from './components/Img';
import Button from './components/Button';
import { Theme } from './Theme';

const imagePlaceholder = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Img placeholder={imagePlaceholder} />
        {/* <Img /> */}
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" icon={{ name: "picture-o" }} />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});