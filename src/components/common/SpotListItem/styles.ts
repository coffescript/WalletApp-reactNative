import { StyleSheet } from 'react-native';
import { lightTheme } from '@src/styles/theme';
import { moderateScale, scale, verticalScale  } from '@src/utils/scale';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  placeInfoContainer: {
    flex: 1,
  },
  placeInfo: {
    marginTop: 5,
  },
  placeTitle: {
    fontWeight: 'bold',
  },
  placeSubTitle: {
    marginTop: 2,
    marginBottom: 10,
    fontSize: 12,
  },
  tabBarStyle: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  //====
  accountMenuItemContainer: {
    marginTop: 10,
  },
  profileAvatar: {
    width: 60,
    height: 60,
  },
  buttonContainer: {
    padding: 10,
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: -15
  },
  Buttondeposit: {
    width: scale(100),
    height: 40,
    marginRight: 20,
    backgroundColor: '#000'
  },
  titleDeposit: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  ButtonwithDraw: {
    width: scale(100),
    height: 40,
    marginRight: 10,
    backgroundColor: '#000'
  },
  titleWithDraw: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    
  },
  ButtonTransfer: {
    width: scale(100),
    height: 40,
    marginLeft: 10,
    backgroundColor: '#000'
  },
  titleTransfer: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  containerTitlePortfolio: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20
  },
  containerMain: {
    marginVertical: 20,
    marginHorizontal: 20
  },
  portfolioTittle: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold'
  },
});
