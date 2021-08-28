import * as React from 'react';
import { View, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import Touchable from '../Touchable';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';

import placeImage from '@src/assets/crypto_availables/ethereum_available_512w.png';
import { Image } from 'react-native-animatable';

export type ListRowPorfolioWaletItemProps = {
  id?: string;
  note?: string;
  title: string;
  coinbase: string;
  coinlong: string;
  balance_crypto?: number;
  balance_fiat?: number;
  subTitle?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  footer?: React.ReactElement;
  image: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  onPress?: (data: ListRowPorfolioWaletItemProps) => void;
};

const ListRowPorfolioWaletItem: React.FC<ListRowPorfolioWaletItemProps> = ({
  id,
  note,
  coinbase,
  coinlong,
  balance_fiat,
  balance_crypto,
  subTitle,
  leftIcon,
  image,
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
        coinbase,
        balance_fiat,
        balance_crypto,
        coinlong,
        subTitle,
        leftIcon,
        rightIcon
      });
  };
  {/**onPress={_onPress} */ }
  return (
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
          {/**
            <Text isBold style={styles.titleText}>
              {title}
            </Text> */}

          < View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
              <Image source={image || placeImage} style={{ width: 65, height: 65, marginRight: 10 }} resizeMode={'cover'} />
              < View style={{ flexDirection: 'column' }}>
                <Text isBold style={styles.titleText}>
                  {coinbase || 'BTC'}
                </Text>
                <Text isBold style={styles.titleText}>
                  {coinlong || 'BITCOIN'}
                </Text>
              </View>
            </View>
          </View>
          {subTitle && (
            <Text style={styles.subTitle} isSecondary>
              {subTitle}
            </Text>
          )}
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text isBold style={styles.titleText}>{`${balance_crypto + ' ' + coinbase}` || `0.000000 ${coinbase}`}</Text>
          <Text isBold style={[styles.titleText, { alignSelf: 'flex-end' }]}>{balance_fiat || '0.00 USD'}</Text>
        </View>
        {rightIcon && (
          <View style={[styles.rightItem, rightContainerStyle]}>
            {rightIcon}
          </View>

        )}
      </View>
      {footer && <View>{footer}</View>}
    </Container >
  );
};

export default ListRowPorfolioWaletItem;
