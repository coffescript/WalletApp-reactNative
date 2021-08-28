import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  linearContainer: {
    flex: 2,
    justifyContent: 'center',

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
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: -15
  },
  Buttondeposit: {
    width: 120,
    height: 45,
  },
  titleDeposit: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  ButtonwithDraw: {
    width: 120,
    height: 45,
  },
  titleWithDraw: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  ButtonTransfer: {
    width: 120,
    height: 45,
  },
  titleTransfer: {
    fontSize: 14,
    color: '#000',
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
