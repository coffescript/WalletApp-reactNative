import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

interface OwnProps {
  children?: React.ReactNode;
}

type ContainerProps = OwnProps & ViewProps;

const Container: React.FC<ContainerProps> = ({ children, style, ...rest }) => {
  const {
    colors: { card },
  } = useTheme();
  return (
    <Animatable.View animation="fadeInUpBig" style={[{ backgroundColor: card }, style]} {...rest}>
      {children}
    </Animatable.View>
  );
};

export default Container;
