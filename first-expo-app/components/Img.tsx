import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

export interface ImgProps {
  placeholder?: ImageSourcePropType;
  source?: ImageSourcePropType;
}

export default function Img(props: ImgProps) {
  const { placeholder, source } = props;
  const _source = source ?? placeholder ?? { uri: 'https://via.placeholder.com/320x440' };
  return (
    <Image source={_source} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
