import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@src/components/elements';
import Account from '@src/components/screens/Account';

import Wallet from '@src/components/screens/Wallet';
import Withdraw from '@src/components/screens/Withdraw';

import EditProfile from '@src/components/screens/EditProfile';
import OrderHistory from '@src/components/screens/OrderHistory';
import SavedAddresses from '@src/components/screens/SavedAddresses';
import AddAddress from '@src/components/screens/AddAddress';
import Settings from '@src/components/screens/Settings';
import SupportCenter from '@src/components/screens/SupportCenter';
import SelectLocationScreen from '@src/components/screens/SelectLocation';
import { ScreenNavigationProps } from '../types';
import styles from './styles';
import { WithDrawFormTab } from '@src/components/screens/Withdraw/RemarkablePlaces/Tabs';

type WalletStackProps = {} & ScreenNavigationProps;
const Stack = createStackNavigator();

const WalletStack: React.FC<WalletStackProps> = (props) => {
  const { navigation } = props;
  const _renderAddAddressHeaderRight = () => {
    return (
      <Icon
        name="map"
        size={18}
        isPrimary
        onPress={() => navigation.navigate('SelectLocationScreen')}
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName="WalletScreen">
      <Stack.Screen
        options={() => {
          return {
            title: 'Wallet',
          };
        }}
        name="WalletScreen"
        component={Wallet}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'Withdraw',
          };
        }}
        name="WithdrawScreen"
        component={Withdraw}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'WithDraw',
          };
        }}
        name="WithdrawFormScreen"
        component={WithDrawFormTab}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'Edit Profile',
          };
        }}
        name="EditProfileScreen"
        component={EditProfile}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'Order History',
          };
        }}
        name="OrderHistoryScreen"
        component={OrderHistory}
      />
      <Stack.Screen
        name="SavedAddressesScreen"
        options={{
          headerTitle: 'Saved Address',
        }}
        component={SavedAddresses}
      />
      <Stack.Screen
        name="AddAddressScreen"
        options={{
          headerTitle: 'Add An Address',
          headerRight: _renderAddAddressHeaderRight,
          headerRightContainerStyle: styles.headerRightContainer,
        }}
        component={AddAddress}
      />
      <Stack.Screen
        name="SettingsScreen"
        options={{
          headerTitle: 'Settings',
        }}
        component={Settings}
      />
      <Stack.Screen
        name="SupportCenterScreen"
        options={{
          headerTitle: 'Support Center',
        }}
        component={SupportCenter}
      />
      <Stack.Screen
        name="SelectLocationScreen"
        options={{
          headerTitle: 'Select location',
        }}
        component={SelectLocationScreen}
      />
    </Stack.Navigator>
  );
};

export default WalletStack;
