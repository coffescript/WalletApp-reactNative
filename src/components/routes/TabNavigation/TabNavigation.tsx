import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStack from '../Stacks/HomeStack';
import AccountStack from '../Stacks/AccountStack';
import NotificationStack from '../Stacks/NotificationStack';
import ActivityHistoryStack from '../Stacks/ActivityHistoryStack';
import WalletStack from '../Stacks/WalletStack';
import Documentation from '@src/components/screens/Documentation';

type TabNavigationProps = {};
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator();
const { Navigator } = Tab;

const renderTabBarIcon = (routeName: string) => {
  return (props: TabBarIconProps) => {
    const { color } = props;
    let iconName = 'home';
    switch (routeName) {
      case 'Wallet':
        iconName = 'wallet';
        break;
      case 'Activity':
        iconName = 'history';
        break;
      case 'Notifications':
        iconName = 'bell';
        break;
      case 'Account':
        iconName = 'user';
        break;
      case 'Explore':
        iconName = 'home';
        break;
        case 'Finances':
          iconName = 'chart-pie';
          break;
      default:
        break;
    }
    return <Icon name={iconName} solid size={24} color={color} />;
  };
};

const TabNavigation: React.FC<TabNavigationProps> = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={(props) => {
        const {
          route: { name: routeName },
        } = props;
        return {
          tabBarIcon: renderTabBarIcon(routeName),
        };
      }}>
      {/**<Tab.Screen name="Activity" component={ActivityHistoryStack} /> */}
      {/**<Tab.Screen name="Notifications" component={NotificationStack} /> */}
      <Tab.Screen name="Explore" component={HomeStack} />
      {/**<Tab.Screen name="Account" component={AccountStack} /> */}
      <Tab.Screen name="Wallet" component={WalletStack} />
      <Tab.Screen name="Finances" component={WalletStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Navigator>
  );
};

export default TabNavigation;
