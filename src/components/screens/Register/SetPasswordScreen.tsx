import * as React from 'react';
import { SafeAreaView, Image, View, ScrollView, Alert, Dimensions } from 'react-native';
import { Text, Container, TextField, Button } from '@src/components/elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import EmailSentModal from './EmailSentModal';

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('screen');

type ForgotPasswordProps = {};

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const navigation = useNavigation();
  const { primary } = useThemeColors();
  const { signIn } = React.useContext(AuthContext);

  const { card } = useThemeColors();
  const [email, setEmail] = React.useState('');
  const [sentEmailModalVisible, setSentEmailModalVisible] = React.useState(
    false,
  );

  const _onPasswordFieldChange = (value: string) => {
    setEmail(value);
  };

  const _onGoToSavePassword = () => {
    navigation.navigate('SetLegalPartScreen');
  }

  const _onConfirmButtonPressed = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email!');
      return;
    }
    setSentEmailModalVisible(true);
  };

  return (
    <>
      <LinearGradient
        colors={['#ca9bf7', '#89cff0']}
        style={styles.linearContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name={'arrow-left'} size={30} style={{ left: 25, top: 70 }} />
          <Animatable.Text style={{
            justifyContent: 'flex-end',
            marginLeft: width / 1.4,
            top: 70,
            fontWeight: 'bold',
            fontSize: 22
          }}>2 de 4</Animatable.Text>
        </View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <ScrollView keyboardShouldPersistTaps="always">

            <Animatable.View
              animation="fadeInUpBig"
              style={styles.appIconContainer}>
            </Animatable.View>
            <Container style={styles.loginMethodContainer}>

              <Text isBold isHeadingTitle style={styles.titleAuthentication}>
                Tu Contrasena Segura.
              </Text>
              <Text isSecondary style={styles.introductionText}>
                Crea una contrasena segura.
              </Text>

              <View style={styles.loginMethod}>
                <TextInput
                  style={[styles.button, { backgroundColor: '#F6F6F6', borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 10, height: 50, textAlign: 'center' }]}
                  placeholder={'Contrasena'}
                  placeholderTextColor={'#BDBDBD'}
                  keyboardAppearance={'dark'}
                />

              </View>


              <View style={styles.loginMethod}>

                <Button
                  style={styles.button}
                  backgroundColor="#000000"
                  height={30}
                  onPress={_onGoToSavePassword}
                  isFullWidth
                >
                  <Text isBold isWhite style={styles.buttonTitle}>
                    SIGUIENTE
                  </Text>
                </Button>
              </View>
            </Container>
          </ScrollView>
        </ScrollView>
      </LinearGradient>

    </>
  );
};

export default ForgotPassword;
