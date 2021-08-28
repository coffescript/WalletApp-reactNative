import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
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
  Touchable
} from '@src/components/elements';
import {
  ScrollView,
  Image,
  View,
  Alert,
  AlertButton,
  I18nManager,
} from 'react-native';
import ListRowPorfolioItem from '@src/components/elements/List/ListRowPorfolioItem';
import ListRowPorfolioWalletItem from '@src/components/elements/List/ListRowPorfolioWalletItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthContext from '@src/context/auth-context';

import ethImage from '@src/assets/crypto_availables/ethereum_available_512w.png';
import btcImage from '@src/assets/crypto_availables/bitcoin_available_512w.png';
import ltcImage from '@src/assets/crypto_availables/litecoin_available_512w.png';
import xrpImage from '@src/assets/crypto_availables/ripple_available_512w.png';

type WalletsListItemProps = {
  data?: Place;
};

const PlaceListItem: React.FC<WalletsListItemProps> = ({ data }) => {
  // const { image, title, subTitle } = data;

  const navigation = useNavigation();
  const { signOut } = React.useContext(AuthContext);
  const chevronIconName = I18nManager.isRTL ? 'chevron-left' : 'chevron-right';

  const _onPlaceItemPressed = () => {
    navigation.navigate('WithDrawScreen');
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
  return (
    <>
      <Container>
        <View style={{ marginHorizontal: 20, top: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>Valor Total (BTC)</Text>
        </View>
        <View style={{ marginHorizontal: 20, margin: 30 }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', }}>0.00 = $0.00 {' '}
            <Icon name={'information-outline'} size={20} />
          </Text>
          <View style={styles.containerButtons}>
            <Button style={styles.Buttondeposit}>
              <Text style={styles.titleDeposit}>
                Deposito
              </Text>
            </Button>

            <Touchable onPress={_onPlaceItemPressed}>
              <Button style={styles.ButtonwithDraw}>
                <Text style={styles.titleWithDraw} isPrimary>
                  Retiro
                </Text>
              </Button>
            </Touchable>

            <Button style={styles.ButtonTransfer}>
              <Text style={styles.titleTransfer} isPrimary>
                Transferir
              </Text>
            </Button>
          </View>
        </View>
        {/**
         * <ListRowItem
          title={profile.name}
          subTitle="Edit Profile"
          onPress={() => navigation.navigate('EditProfileScreen')}
          leftIcon={
            <Image source={profile.avatar} style={styles.profileAvatar} />
          }
          rightIcon={<Icon name={chevronIconName} />}
        />
         */}
      </Container>
      <Container style={styles.accountMenuItemContainer}>
        <View style={styles.containerMain}>
          <Text style={styles.portfolioTittle} isPrimary>
            Portfolio
          </Text>
        </View>
        <Divider />
        <ScrollView>
        <Touchable onPress={_onPlaceItemPressed}>
          <ListRowPorfolioWalletItem
            coinbase={'ETH'}
            coinlong={'Ethereum'}
            balance_crypto={0.12345}
            image={ethImage}
            balance_fiat={0.00}
            onPress={() => navigation.navigate('OrderHistoryScreen')}
            rightIcon={<Icon name={chevronIconName} />}
          />
        </Touchable>
        <Divider />
        <Touchable onPress={_onPlaceItemPressed}>
          <ListRowPorfolioWalletItem
            coinbase={'BTC'}
            coinlong={'Bitcoin'}
            balance_crypto={0.12345}
            image={btcImage}
            balance_fiat={0.00}
            onPress={() => navigation.navigate('OrderHistoryScreen')}
            rightIcon={<Icon name={chevronIconName} />}
          />
        </Touchable>
        <Divider />
        <Touchable onPress={_onPlaceItemPressed}>
          <ListRowPorfolioWalletItem
            coinbase={'LTC'}
            coinlong={'Litecoin'}
            balance_crypto={0.12345}
            image={ltcImage}
            balance_fiat={0.00}
            onPress={() => navigation.navigate('OrderHistoryScreen')}
            rightIcon={<Icon name={chevronIconName} />}
          />
        </Touchable>
        <Divider />
        <Touchable onPress={_onPlaceItemPressed}>
          <ListRowPorfolioWalletItem
            coinbase={'XRP'}
            coinlong={'Ripple'}
            balance_crypto={0.12345}
            image={xrpImage}
            balance_fiat={0.00}
            onPress={() => navigation.navigate('OrderHistoryScreen')}
            rightIcon={<Icon name={chevronIconName} />}
          />
        </Touchable>
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
        </ScrollView>
      </Container>
    </>
  );
};

export default PlaceListItem;
