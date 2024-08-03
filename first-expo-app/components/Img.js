import { StyleSheet, Image } from 'react-native';

export default function Img({ placeholder = undefined, source = undefined }) {
  source = source || placeholder;
  source = source || { uri: 'https://via.placeholder.com/320x440' };
  return (
    <Image source={source} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
