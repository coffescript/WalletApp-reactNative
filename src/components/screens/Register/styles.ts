import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  contentContainer: {
    padding: 15,
  },
  formContainer: {
    paddingTop: '20%',
    marginBottom: 30,
  },
  emailTextField: {
    marginTop: 30,
  },
  modalContainer: {
    padding: 20,
  },
  passwordText: {
    marginTop: 15,
    marginBottom: 15,
  },
  confirmButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  cancelButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  linearContainer: {
    flex: 2,
    justifyContent: 'center',

  },
  appIconContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIcon: {
    width: 200,
    height: 200,
    marginTop: height / 1.7,
  },
  loginMethodContainer: {
    padding: 25,
    paddingBottom: 95,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: height / 5,
    height: height
  },
  titleAuthentication: {
    marginTop: 15,
    alignContent: 'flex-start',
    textAlign: 'left',
    fontSize: 25
  },
  introductionText: {
    alignContent: 'flex-start',
    textAlign: 'left',
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
  }
});
