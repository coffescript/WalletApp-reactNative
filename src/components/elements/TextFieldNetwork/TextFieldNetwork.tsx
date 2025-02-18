import * as React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface OwnProps {
  leftIcon?: string;
  leftIconSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
  hasMargin?: boolean;
}

type TextFieldNetworkProps = OwnProps & TextInputProps;

const TextFieldNetwork: React.FC<TextFieldNetworkProps> = ({
  leftIcon,
  leftIconSize,
  style,
  containerStyle,
  hasMargin,
  ...rest
}) => {
  const {
    colors: { text, background },
  } = useTheme();
  let margin = 0;
  if (hasMargin) {
    margin = 5;
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background, marginTop: margin, marginBottom: margin },
        containerStyle,
      ]}>
      <TextInput
        style={[{ color: text }, styles.textField, style]}
        placeholderTextColor={text}
        underlineColorAndroid="transparent"
        {...rest}
      />
      {leftIcon && (
        <View style={styles.containerIcons}>
          <Icon style={[styles.leftIcon, { marginHorizontal: 10, color: '#9b9b9b' }]} name={'arrow-right-bold-box-outline'} size={24} />
        </View>
      )}
    </View>
  );
};

TextFieldNetwork.defaultProps = {
  leftIconSize: 14,
};

export default TextFieldNetwork;
