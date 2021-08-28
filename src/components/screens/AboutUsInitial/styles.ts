import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
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
    marginTop: height / 1.7,
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
    
  },
  button: {
    marginTop: 10,
  },
  buttonTitle: {
    alignSelf: 'center'
  }
});
