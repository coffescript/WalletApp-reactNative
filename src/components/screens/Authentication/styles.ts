import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale  } from '@src/utils/scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  linearContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  appIconContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIcon: {
    width: '20%',
    height: '20%',
  },
  loginMethodContainer: {
    padding: 25,   
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  formContainer: {
    paddingTop: '20%',
    marginBottom: 30,
  },
  titleAuthentication: {
    marginTop: 15,
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 30
  },
  introductionText: {
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  loginMethod: {
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    
  },
  buttonTitle: {
    alignSelf: 'center'
  },

  passwordTextField: {
    marginTop: 30,
  },
  
  passwordText: {
    marginTop: 15,
    marginBottom: 15,
  },


  root: {
    flex: 1,
  },
  contentContainer: {
    padding: 15,
  },

  createAccountButton: {
    marginTop: 10,
  },
  forgotPasswordButton: {
    marginBottom: 5,
  }
});
