import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from '@src/components/screens/Authentication';
import CryptoAvailable from '@src/components/screens/CryptoAvailable';
import AuthWithPhoneNumber from '@src/components/screens/AuthWithPhoneNumber';
import AuthVerificationCode from '@src/components/screens/AuthVerificationCode';
import AboutUsInitial from '@src/components/screens/AboutUsInitial';
import Login from '@src/components/screens/Login';
import ForgotPassword from '@src/components/screens/ForgotPassword';
import { SetEmailScreen, SetLegalPartScreen, SetPasswordScreen } from '@src/components/screens/Register';
import useThemeColors from '@src/custom-hooks/useThemeColors';


type AuthenticationStackProps = {};
const Stack = createStackNavigator();

const AuthenticationStack: React.FC<AuthenticationStackProps> = () => {
  const insets = useSafeAreaInsets();
  const { background } = useThemeColors();
  return (
    <Stack.Navigator
      initialRouteName="AboutUsInitialScreen"
      screenOptions={{
        headerShown: true,
        title: '',
        headerStatusBarHeight: insets.top,
        headerStyle: { backgroundColor: background },
      }}>
      <Stack.Screen
        name="AboutUsInitialScreen"
        component={AboutUsInitial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CryptoAvailableScreen"
        component={CryptoAvailable}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthenticationScreen"
        component={Authentication}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthWithPhoneNumberScreen"
        component={AuthWithPhoneNumber}
      />
      <Stack.Screen
        name="AuthVerificationCodeScreen"
        component={AuthVerificationCode}
      />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="CreateAccountScreen" component={ForgotPassword} />
      <Stack.Screen
        name="SetEmailScreen"
        component={SetEmailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SetPasswordScreen"
        component={SetPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SetLegalPartScreen"
        component={SetLegalPartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
