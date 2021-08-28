import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  containerOne: {
    flexDirection: 'column',
    right: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  containerTwo: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  placeInfoContainer: {
    flex: 1,
    marginHorizontal: 10
  },
  placeInfo: {
    marginTop: 5,
    flexDirection: 'row',

  },
  priceMarket: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 160
  },
  placeTitleMarket: {
    fontWeight: 'bold',
    left: 10
  },
  placeTitlePrice: {
    fontWeight: 'bold',
    right: 25
  },
  placeTitleChange24: {
    fontWeight: 'bold',
    right: 25
  },
  placeSubTitle: {
    marginTop: 2,
    marginBottom: 10,
    fontSize: 12,
  },
});
