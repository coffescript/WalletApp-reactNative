import * as React from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Text, Button } from '@src/components/elements';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import Onboarding from 'react-native-onboarding-swiper';

type AuthenticationProps = {
  navigation: any;
};

const AboutUsInitial: React.FC<AuthenticationProps> = ({ navigation }) => {
  //const navigation = useNavigation();
  const { primary } = useThemeColors();
  const { signIn } = React.useContext(AuthContext);

  const _onConnectWithPhoneNumberButtonPressed = () => {
    navigation.navigate('CryptoAvailableScreen');
  };
  const _onSocialNetworkConnectButtonPressed = () => {
    signIn();
  };

  const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor
        }}
      />
    );
  }

  const Skip = ({ ...props }) => (
    <TouchableOpacity
      style={{ marginHorizontal: 10 }}
      {...props}
    >
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
  );

  const Next = ({ ...props }) => (
    <TouchableOpacity
      style={{ marginHorizontal: 10 }}
      {...props}
    >
      <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
  );

  const Done = ({ ...props }) => (
    <TouchableOpacity
      style={{ marginHorizontal: 10 }}
      {...props}
    >
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  );

  return (
    <>
      {/*<LinearGradient
        colors={['#ca9bf7', '#89cff0']}
        style={styles.linearContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.appIconContainer}>
          <Image
            source={require('../../../assets/app/swapper_icon.png')}
            resizeMode={'center'}
            style={styles.appIcon}
          />
        </Animatable.View>
        <Container style={styles.loginMethodContainer}>
          <Text isBold isHeadingTitle style={styles.titleAuthentication}>
            Start with good intentions.
          </Text>
          <Text isSecondary style={styles.introductionText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
          <View style={styles.loginMethod}>

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
        </Container>
      </LinearGradient>*/}
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={_onConnectWithPhoneNumberButtonPressed}
        onDone={_onConnectWithPhoneNumberButtonPressed}
        pages={[
          {
            backgroundColor: '#ca9bf7',
            image: <Image source={require('../../../assets/onboarding/cajero-crypto.png')} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            backgroundColor: '#89cff0',
            image: <Image source={require('../../../assets/onboarding/wallet-close.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../../../assets/onboarding/wallet-open.png')} />,
            title: 'Become The Star',
            subtitle: "Let The Spot Light Capture You",
          },
        ]}
      />
    </>


  );
};

export default AboutUsInitial;

