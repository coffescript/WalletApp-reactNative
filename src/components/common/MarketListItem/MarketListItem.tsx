import * as React from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Text, Touchable } from '@src/components/elements';
import { Place } from '@src/data/mock-markets';
import styles from './styles';
import PlaceCardInfo from '../PlaceCardInfo';

type MarketListItemProps = {
  data: Place;
};

const MarketListItem: React.FC<MarketListItemProps> = ({ data }) => {
  const { image, title, subTitle, market, coinbase, coinsecondary, price, change_24hours } = data;
  const navigation = useNavigation();

  const _onPlaceItemPressed = () => {
    navigation.navigate('PlaceDetailsScreen');
  };

  return (
    <Touchable onPress={_onPlaceItemPressed}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Container style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
              {/**<Image style={styles.image} source={image} /> */}
            </View>
            <Image style={styles.image} source={image} />
            <Text style={styles.placeTitleMarket}>{market}</Text>
          </Container>

        </View>
        <View>
          <Container style={styles.container}>
            <Text style={styles.placeTitlePrice}>{price}</Text>
          </Container>
        </View>
        <View>
          <Container style={styles.container}>
            <Text style={styles.placeTitleChange24}>{change_24hours}</Text>
          </Container>
        </View>
      </View>
    </Touchable >
  );
};

export default MarketListItem;


/**
 *<Container style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.placeInfoContainer}>
            <View style={styles.placeInfo}>
              <Text style={styles.placeTitle}>{market}</Text>
              <Text style={styles.priceMarket}>${price}</Text>
            </View>
            <View>
              <Text style={styles.placeSubTitle}>{`${coinbase} / ${coinsecondary}`}</Text>
            </View>
            <PlaceCardInfo data={data} />
          </View>
        </Container>

 */