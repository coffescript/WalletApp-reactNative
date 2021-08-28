import * as React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { Container, Text, Button, Icon } from '@src/components/elements';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';


// import backgroundGradient from '../../../assets/gradients/background_gradient.png';


import bitcoinAvailable from '../../../assets/crypto_availables/bitcoin_available_512w.png';
import ethereumAvailable from '../../../assets/crypto_availables/ethereum_available_512w.png';
import litecoinAvailable from '../../../assets/crypto_availables/litecoin_available_512w.png';
import rippleAvailable from '../../../assets/crypto_availables/ripple_available_512w.png';
import dots from '../../../assets/crypto_availables/dots.png';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

type AuthenticationProps = {};

const AboutUsInitial: React.FC<AuthenticationProps> = () => {
  const navigation = useNavigation();
  const { primary } = useThemeColors();
  const { signIn } = React.useContext(AuthContext);

  const _onConnectWithPhoneNumberButtonPressed = () => {
    navigation.navigate('AuthenticationScreen');
  };
  const _onSocialNetworkConnectButtonPressed = () => {
    signIn();
  };

  return (
    <>
      {/**
     * <ImageBackground
      source={backgroundGradient}
      style={[
        styles.container,
      ]}>
      <ScrollView>
        <Container style={styles.loginMethodContainer}>
          <Text isBold isHeadingTitle style={styles.titleAuthentication}>
            Make it happen.
        </Text>
          <Text isSecondary style={styles.introductionText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
          <View style={styles.loginMethod}>

            <View style={styles.containerIconArrow}>
              <Icon
                isPrimary
                name="arrow-down"
                size={38}
                style={styles.iconArrow} />
            </View>

            <View style={styles.containerCoinsAvailable}>
              <View style={styles.containerFirstCellCoinsAvailables}>
                <Image source={bitcoinAvailable} style={styles.bitcoinAvailable} resizeMode={'cover'} />
                <Image source={ethereumAvailable} style={styles.ethereumAvailable} resizeMode={'cover'} />
              </View>
              <View style={styles.containerFirstCellCoinsAvailables}>
                <Image source={litecoinAvailable} style={styles.litecoinAvailable} resizeMode={'cover'} />
                <Image source={rippleAvailable} style={styles.rippleAvailable} resizeMode={'cover'} />
              </View>
            </View>
          </View>
        </Container>
        <View style={styles.buttonNextContainer}>
          <View>
            <Image source={dots} style={styles.dots} resizeMode={'cover'} />
          </View>
          <Button
            style={styles.button}
            backgroundColor="#000000"
            height={30}
            isFullWidth
            onPress={_onConnectWithPhoneNumberButtonPressed}>
            <Text isBold isWhite style={styles.buttonTitle}>
              START
            </Text>
          </Button></View>
      </ScrollView>
    </ImageBackground>
     */}
      <LinearGradient
        colors={['#ca9bf7', '#89cff0']}
        style={styles.linearContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <ScrollView>
          <Container style={styles.loginMethodContainer}>
            <Text isBold isHeadingTitle style={styles.titleAuthentication}>
              Make it happen.
            </Text>
            <Text isSecondary style={styles.introductionText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Text>
            <View style={styles.loginMethod}>

              {/*
              <View style={styles.containerIconArrow}>
                <Icon
                  isPrimary
                  name="arrow-down"
                  size={38}
                  style={styles.iconArrow} />
              </View>
              */}

              <View style={styles.containerCoinsAvailable}>
                <View style={styles.containerFirstCellCoinsAvailables}>
                  <Image source={bitcoinAvailable} style={styles.bitcoinAvailable} resizeMode={'cover'} />
                  <Image source={ethereumAvailable} style={styles.ethereumAvailable} resizeMode={'cover'} />
                </View>
                <View style={styles.containerFirstCellCoinsAvailables}>
                  <Image source={litecoinAvailable} style={styles.litecoinAvailable} resizeMode={'cover'} />
                  <Image source={rippleAvailable} style={styles.rippleAvailable} resizeMode={'cover'} />
                </View>
              </View>
            </View>
          </Container>
          <View style={styles.buttonNextContainer}>
            <View>
              <Image source={dots} style={styles.dots} resizeMode={'cover'} />
            </View>
            <Button
              style={styles.button}
              backgroundColor="#000000"
              height={30}
              isFullWidth
              onPress={_onConnectWithPhoneNumberButtonPressed}>
              <Text isBold isWhite style={styles.buttonTitle}>
                START
              </Text>
            </Button>
          </View>

        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default AboutUsInitial;
