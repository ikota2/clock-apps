import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle, ImageStyle, GestureResponderEvent} from 'react-native';

type T = ViewStyle | TextStyle | ImageStyle;

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  isDisabled: boolean;
  title: string;
  btnStyle: StyleProp<T>;
  textStyle: StyleProp<T>;
}

const Button: FC<Props> = ({onPress, isDisabled, title, btnStyle, textStyle}) => {
  return (
    <TouchableOpacity
      style={btnStyle}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
