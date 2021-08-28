import * as React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Touchable from '../Touchable';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';

export type ListRowPorfolioItemProps = {
  id?: string;
  note?: string;
  title: string;
  balance?: number;
  subTitle?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  footer?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  onPress?: (data: ListRowPorfolioItemProps) => void;
};

const ListRowPorfolioItem: React.FC<ListRowPorfolioItemProps> = ({
  id,
  note,
  title,
  balance,
  subTitle,
  leftIcon,
  rightIcon,
  footer,
  containerStyle,
  leftContainerStyle,
  rightContainerStyle,
  onPress,
}) => {
  const _onPress = () => {
    onPress &&
      onPress({
        id,
        title,
        subTitle,
        leftIcon,
        rightIcon,
      });
  };

  return (
    <Touchable onPress={_onPress}>
      <Container>
        <View style={[styles.itemContainer, containerStyle]}>
          {leftIcon && (
            <View style={[styles.leftItem, leftContainerStyle]}>
              {leftIcon}
            </View>
          )}
          <View style={styles.content}>
            {note && (
              <Text isSecondary style={styles.note}>
                {note}
              </Text>
            )}
            <Text isBold style={styles.titleText}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} isSecondary>
                {subTitle}
              </Text>
            )}
          </View>
          <Text>{balance || '0.00 BTC' }</Text>
          {rightIcon && (
            <View style={[styles.rightItem, rightContainerStyle]}>
              {rightIcon}
            </View>
          )}
        </View>
        {footer && <View>{footer}</View>}
      </Container>
    </Touchable>
  );
};

export default ListRowPorfolioItem;
