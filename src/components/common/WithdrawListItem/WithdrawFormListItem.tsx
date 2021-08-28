import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Place } from '@src/data/mock-places';
import styles from './styles';
import PlaceCardInfo from '../PlaceCardInfo';

import {
  Container,
  // Icon,
  Divider,
  SearchBar,
  Button,
  Text,
  Touchable,
  TextFieldAddress,
  TextFieldNetwork
} from '@src/components/elements';
import {
  ScrollView,
  Image,
  View,
  Alert,
  AlertButton,
  StyleSheet,
  I18nManager,
} from 'react-native';
import ListRowPorfolioItem from '@src/components/elements/List/ListRowPorfolioItem';
import ListRowPorfolioWalletItem from '@src/components/elements/List/ListRowPorfolioWalletItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthContext from '@src/context/auth-context';

import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import ethImage from '@src/assets/crypto_availables/ethereum_available_512w.png';
import btcImage from '@src/assets/crypto_availables/bitcoin_available_512w.png';
import ltcImage from '@src/assets/crypto_availables/litecoin_available_512w.png';
import xrpImage from '@src/assets/crypto_availables/ripple_available_512w.png';

type WithdrawFormListItemProps = {
  data?: Place;
  leftIconName?: string;
  placeholder?: string;
};

const WithdrawFormListItem: React.FC<WithdrawFormListItemProps> = ({
  data,
  leftIconName = 'book',
  placeholder = '',
}) => {
  // const { image, title, subTitle } = data;

  const navigation = useNavigation();
  const { colors: { card }, } = useTheme();
  const { signOut } = React.useContext(AuthContext);
  const chevronIconName = I18nManager.isRTL ? 'chevron-left' : 'chevron-right';

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const _onPlaceItemPressed = () => {
    navigation.navigate('WithdrawFormScreen');
  };

  const alertButtons: AlertButton[] = [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    { text: 'OK', onPress: () => signOut() },
  ];

  const onLogoutButtonPressed = () => {
    Alert.alert('Confirm', 'Are you sure you want to logout?', alertButtons);
  };

  {/**onPress={_onPlaceItemPressed} */ }
  {/**<Touchable onPress={_onPlaceItemPressed}> */ }

  return (
    <>
      <Container>
      </Container>
      <Container style={styles.accountMenuItemContainer}>
        <View style={styles.containerMain}>
          <Text style={styles.portfolioTittle} isPrimary>
            Retirar BTC
          </Text>
        </View>
        <Divider />

        <Text style={styles.addresstitle} isPrimary>
          Direccion
        </Text>
        <Container style={[styles.searchContainer, { backgroundColor: card }]}>
          <TextFieldAddress
            leftIcon={leftIconName}
            placeholder={'Manten presionado para pegar'}
            placeholderTextColor={'#9b9b9b'}
            style={{ borderRadius: 0 }} />
        </Container>
        <Text style={styles.addresstitle} isPrimary>
          Red
        </Text>
        <Container style={[styles.searchContainer, { backgroundColor: card }]}>
          <TextFieldNetwork
            leftIcon={leftIconName}
            placeholder={'Seleccionar Red'}
            placeholderTextColor={'#9b9b9b'}
            style={{ borderRadius: 0 }} />
        </Container>
        <Divider />
        <View style={styles.bottomSheetcontainer}>
   
        </View>
        {/**
         * <Divider />
        <ListRowItem
          title="Order History"
          onPress={() => navigation.navigate('OrderHistoryScreen')}
          rightIcon={<Icon name={chevronIconName} />}
        />
        <Divider />
        <ListRowItem
          title="Delivery Address"
          onPress={() => navigation.navigate('SavedAddressesScreen')}
          rightIcon={<Icon name={chevronIconName} />}
        />
        <Divider />
        <ListRowItem
          title="Settings"
          onPress={() => navigation.navigate('SettingsScreen')}
          rightIcon={<Icon name={chevronIconName} />}
        />
        <Divider />

        <ListRowItem
          title="Support Center"
          onPress={() => navigation.navigate('SupportCenterScreen')}
          rightIcon={<Icon name={chevronIconName} />}
        />
        <Divider />
        <ListRowItem
          title="Share Feedback"
          rightIcon={<Icon name={chevronIconName} />}
        />
         */}
      </Container>
    </>
  );
};

export default WithdrawFormListItem;
