import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Theme } from 'Theme';

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  icon?: {
    name?: typeof FontAwesome.defaultProps.name;
    size?: number;
    color?: string;
    style?: any;
    position?: 'left' | 'right';
  };
}

export default function Button(props: ButtonProps) {

  const { label, onPress, icon } = props;

  const iconData = {
    name: undefined,
    size: 18,
    color: Theme.button.color,
    style: {},
    position: 'left',
    ...icon,
  }

  const _icon = iconData.name ? (
    <FontAwesome
      name={iconData.name}
      size={iconData.size}
      color={iconData.color}
      style={[iconData.style, styles.buttonIcon]}
    />
  ) : null;
  console.log({ _icon });


  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.pressable} onPress={onPress}>
        {_icon && iconData.position === 'left' ? _icon : null}
        <Text style={styles.buttonLabel}>{label}</Text>
        {_icon && iconData.position === 'right' ? _icon : null}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Theme.button.backgroundColor,
    borderRadius: Theme.borderRadius,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'row',
  },
  pressable: {
    borderRadius: 10,
    width: Theme.button.width,
    height: Theme.button.height,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: Theme.button.color,
    fontSize: 16,
  },
});
