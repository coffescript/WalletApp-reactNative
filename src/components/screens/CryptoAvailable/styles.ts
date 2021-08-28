import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale  } from '@src/utils/scale';


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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  appIcon: {
    width: '60%',
    height: '60%',
  },
  loginMethodContainer: {
    padding: 25,
    paddingBottom: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

  },
  titleAuthentication: {
    marginTop: 50,
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

  containerIconArrow: {
    backgroundColor: '#000',
    width: scale(45),
    height: scale(45),
    borderRadius: 100,
    marginHorizontal: 15,
  },
  iconArrow: {
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    top: 5
  },
  containerCoinsAvailable: {
    width: '90%',
    top: 20,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  containerFirstCellCoinsAvailables: {
    flexDirection: 'row',
    alignContent: 'space-around'
  },
  bitcoinAvailable: {
    width: scale(130),
    height: scale(130),

    bottom: 14
  },
  ethereumAvailable: {
    width: scale(110),
    height: scale(110),
  },
  litecoinAvailable: {
    width: scale(130),
    height: scale(130),
    bottom: 14,
    left: 5
  },
  rippleAvailable: {
    width: scale(120),
    height: scale(128),
    bottom: 15,
    right: 10
  },
  buttonNextContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    marginTop: 10,
    width: '50%',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  buttonTitle: {
    alignSelf: 'center'
  },
  dots: {
    width: 55,
    height: 10,
    marginTop: 45,
    marginLeft: 10
  },
});
