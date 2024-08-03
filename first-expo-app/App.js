import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Img from './components/Img';

const imagePlaceholder = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Img placeholder={imagePlaceholder} />
        {/* <Img /> */}
      </View>
      <View>
        <Text style={{ color: 'white' }}>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});