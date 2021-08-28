import * as React from 'react';
import { View, Image, ImageBackground, TextInput, Alert } from 'react-native';
import { Container, Text, Button, TextField } from '@src/components/elements';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import TextFieldCommon from '@src/components/elements/TextFieldCommon';
import { ScrollView } from 'react-native-gesture-handler';
import { scale } from '@src/utils/scale';
import LinearGradient from 'react-native-linear-gradient';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import axios from 'axios';

type AuthenticationProps = {
  login: ({ email, password }) => {}
};

interface FormAuthentication {
  email: string;
  password: string;
}

const Authentication: React.FC<AuthenticationProps> = ({ login }) => {
  const navigation = useNavigation();
  const { card } = useThemeColors();
  const { primary } = useThemeColors();
  const { signIn } = React.useContext(AuthContext);

  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    // console.log('login', login);
    // login({
    //  email: 'dmejia1204@gmail.com',
    //  password: '123456'
    // })
  }, [])

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

  const _onCreateAccountPressed = () => {
    navigation.navigate('SetEmailScreen');
  };

  const _onForgotPasswordButtonPressed = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const _onConnectWithPhoneNumberButtonPressed = () => {
    navigation.navigate('LoginScreen');
  };

  const initialValues: FormAuthentication = { email: '', password: '' };

  const _onLoginPressed = (values: any) => {
    console.log('im executed!', values);
    const { email, password } = values;

    const user = axios.post('https://api.mibo.app/api/auth/login', {
      email: email,
      password: password
    })
      .then(function (response) {
        console.log('response', response);
      })
      .catch(function (error) {
        console.log('error', error);
      });
    console.log('user', user)

    // login({ email, password });
  }

  return (

    <LinearGradient
      colors={['#ca9bf7', '#89cff0']}
      style={styles.linearContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Animatable.View
        animation="fadeInUpBig"
        style={styles.appIconContainer}>
      </Animatable.View>

      <Container style={styles.loginMethodContainer}>
        <Image
          source={require('../../../assets/app/swapper_icon.png')}
          style={[styles.appIcon, { marginTop: 10, alignContent: 'center', alignSelf: 'center', alignItems: 'center' }]}
        />
        <Text isBold isHeadingTitle style={styles.titleAuthentication}>
          Start with good intentions.
        </Text>
        <View style={styles.loginMethod}>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => _onLoginPressed(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (

              <>
                <TextInput
                  style={[styles.button, { backgroundColor: '#F6F6F6', borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 10, height: 50, textAlign: 'center' }]}
                  placeholder={'Email'}
                  placeholderTextColor={'#BDBDBD'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />

                <TextInput
                  style={[styles.button, { backgroundColor: '#F6F6F6', borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 10, height: 50, textAlign: 'center' }]}
                  placeholder={'Password'}
                  placeholderTextColor={'#BDBDBD'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />

                <Button
                  style={[
                    styles.button,
                    {
                      height: scale(40)
                    }]}
                  backgroundColor={'#000'}
                  isFullWidth
                  onPress={() => _onLoginPressed(values)}>
                  <Text isBold isWhite>
                    INICIAR SESION
                  </Text>
                </Button>
              </>
            )}
          </Formik>

          <Button
            style={[
              styles.button,
              {
                height: scale(40)
              }]}
            backgroundColor="#4267b2"
            isFullWidth
            onPress={_onSocialNetworkConnectButtonPressed}>
            <Text isBold isWhite>
              LOGIN WITH FACEBOOK
            </Text>
          </Button>
          <Button
            style={[
              styles.button,
              {
                height: scale(40)
              }]}
            backgroundColor="#D62D20"
            isFullWidth
            onPress={_onSocialNetworkConnectButtonPressed}>
            <Text isBold isWhite>
              LOGIN WITH GOOGLE
            </Text>
          </Button>
          <Button
            isFullWidth
            isTransparent
            onPress={_onCreateAccountPressed}
            style={styles.createAccountButton}>
            <Text>Create an account, Press here!</Text>
          </Button>
          <Button
            isFullWidth
            isTransparent
            onPress={_onForgotPasswordButtonPressed}
            style={styles.forgotPasswordButton}>
            <Text>Forgot Password</Text>
          </Button>
        </View>
      </Container>

    </LinearGradient>
  );
};

export default Authentication;



{/*


  <Container style={styles.loginMethodContainer}>
        <Text isBold isHeadingTitle>
          Get food you want.
        </Text>
        <Text isSecondary style={styles.introductionText}>
          Satisfy your cravings by getting the food you love from your favourite
          restaurants delivered to you fast. Delivery & takeout from the best
          local restaurants.
        </Text>
        
      </Container>


*/}