import * as React from 'react';
import { View, Image, ImageBackground, TouchableOpacity, TextInput, Alert, Animated, FlatList } from 'react-native';
import { Container, Text, Button, TextField } from '@src/components/elements';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Tags from "react-native-tags";


import backgroundGradient from '../../../assets/gradients/background_gradient.png';
import backgroundCardWallets from '../../../assets/dashboard/wallets_review/background_card_wallets.png';
import MIBOicon from '../../../assets/app/swapper_icon.png';
import TextFieldCommon from '@src/components/elements/TextFieldCommon';
import { ScrollView } from 'react-native-gesture-handler';

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  const navigation = useNavigation();
  const { card } = useThemeColors();
  const { primary } = useThemeColors();
  const { signIn } = React.useContext(AuthContext);

  const [password, setPassword] = React.useState('');

  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;

  const _onSocialNetworkConnectButtonPressed = () => {
    signIn();
  };

  const _onNextButtonPressed = () => {
    //if (!password) {
    //  Alert.alert('Error', 'Please enter your password!');
    //  return;
    //}
    signIn();
  };

  const _onPasswordFieldChange = (value: string) => {
    setPassword(value);
  };

  const _onForgotPasswordButtonPressed = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const _onConnectWithPhoneNumberButtonPressed = () => {
    navigation.navigate('LoginScreen');
  };

  const DATA = [
    {
      name: 'Monedero Principal',
      coin: 'BTC',
      balance: '$49,329.77'
    },
    {
      name: 'Moneero de Ahorros',
      coin: 'BTC',
      balance: '$49,329.77'
    },
    {
      name: 'X Wallet',
      coin: 'ETH',
      balance: '$2,329.77'
    },
    {
      name: 'Monedero de Bitcoin',
      coin: 'XRP',
      balance: '$0.77'
    },
    {
      name: 'Monedero ETH',
      coin: 'ETH',
      balance: '$2,3549.77'
    }
  ]


  const pan = React.useRef(new Animated.ValueXY()).current;

  const renderItem = ({ item, index }) => (
    <Animated.View
      style={[{
        transform: [
          {
            scale: pan.x.interpolate({
              inputRange: [
                (index - 1) * boxWidth - halfBoxDistance,
                index * boxWidth - halfBoxDistance,
                (index + 1) * boxWidth - halfBoxDistance, // adjust positioning
              ],
              outputRange: [0.8, 1, 0.8], // scale down when out of scope
              extrapolate: 'clamp',
            }),
          },
        ],
      }, styles.cardFlat]}>
      <ImageBackground
        source={backgroundCardWallets}
        imageStyle={{ borderRadius: 35 }}
        style={{
          height: 250,
          width: 420,
          borderRadius: 35,
          backgroundColor: `#ccc`,
        }}
      >
        {/** <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#6946da', '#F37293', '#f2a3bb', '#7ac4ec']}
        style={
          {
            height: 250,
            width: 420,
            borderRadius: 35,
            backgroundColor: `#ccc`,
          }
        }>*/}
        <View style={styles.containerCard}>
          <Text style={styles.balanceWallet}>{item.balance}</Text>
          <Image source={MIBOicon} style={styles.logoSwpper} />
        </View>
        <Text style={styles.nameWallet}>{item.name}</Text>
        {/**</LinearGradient> */}

      </ImageBackground>
    </Animated.View >
  );

  return (

    <>
      <ImageBackground
        source={backgroundGradient}
        style={[
          styles.container,
        ]}>
        <Animatable.View
          animation="fadeInUpBig"
          style={styles.appIconContainer}>
        </Animatable.View>
        <Container style={styles.loginMethodContainer}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: pan.x } } }],
              {
                useNativeDriver: false,
              },
            )}
            keyExtractor={(item, index) => `${index}-s${item}`}
            renderItem={renderItem}
          />

          <View style={styles.optionsHeader}>
            <Text style={styles.chartsText}>Charts</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>
        </Container>
      </ImageBackground>
    </>
  );
};

export default Dashboard;


//rgba(${(index * 13) % 255}, ${(index * 35) % 255}, ${(index * 4) % 255}, .5)