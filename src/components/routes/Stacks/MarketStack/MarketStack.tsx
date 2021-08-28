import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Market from '@src/components/screens/Market';
import { ScreenNavigationProps } from '../types';

type MarketStackProps = {} & ScreenNavigationProps;
const Stack = createStackNavigator();

const MarketStack: React.FC<MarketStackProps> = () => {
  return (
    <Stack.Navigator initialRouteName="MarketStackScreen">
      <Stack.Screen
        options={() => {
          return {
            title: 'Activity History',
          };
        }}
        name="MarketStackScreen"
        component={Market}
      />
      {/*<Stack.Screen
        options={() => {
          return {
            title: 'Detail',
          };
        }}
        name="MarketDetailScreen"
        component={MarketsDetail}
      />*/}
    </Stack.Navigator>
  );
};

export default MarketStack;
