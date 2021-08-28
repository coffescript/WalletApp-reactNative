import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Carousel,
  Section,
  Card
} from '@src/components/elements';
import { Dimensions, View } from 'react-native';
import { mockPlaces, Place } from '@src/data/mock-places';
import PlaceCardInfo from '@src/components/common/PlaceCardInfo';
import Text from '../../../../components/elements/Text';

import WalletLightIcon from '../../../../assets/icons/wallet-light';
import WalletDarkIcon from '../../../../assets/icons/wallet-dark';

import MasterCardIcon from '../../../../assets/icons/mastercard-icon';

type RecommendedPlacesProps = {};

const RecommendedPlaces: React.FC<RecommendedPlacesProps> = () => {
  const navigation = useNavigation();

  const _onButtonActionPressed = () => {
    navigation.navigate('PlaceListScreen', { title: 'Recommended' });
  };

  const _onPlaceItemPressed = () => {
    navigation.navigate('PlaceDetailsScreen');
  };

  return (
    <>
      {/*
    <Section
      title="Recommended"
      actionButtonText="View more"
      onButtonActionPressed={_onButtonActionPressed}>
      <Carousel
        data={mockPlaces}
        itemWidth={Dimensions.get('window').width / 2 - 15}
        renderContent={(item: Place, index, parallaxProps) => {
          const {image, title, subTitle} = item;
          return (
            <Card
              coverImage={image}
              isSmallCover
              title={title}
              subTitle={subTitle}
              parallaxProps={parallaxProps}
              onPress={_onPlaceItemPressed}>
              <PlaceCardInfo data={item} />
            </Card>
          );
        }}
      />
    </Section>*/}
      <View style={{
        marginHorizontal: 30,
        marginVertical: 30,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around'
      }}>
        <View style={{
          marginLeft: 10,
          backgroundColor: '#2F80ED',
          height: 205,
          width: 158,
          borderRadius: 12,
          paddingHorizontal: 10,
          paddingVertical: 31,
        }}>
          <WalletLightIcon />

          <View style={{ marginHorizontal: 2, marginVertical: 20 }}>
            <Text style={{ fontSize: 13, color: '#B3C0D0', fontWeight: '400' }} >Balance Principal</Text>
            <Text style={{ fontSize: 35, color: '#B3C0D0', marginTop: 10, fontWeight: 'bold' }} >$4,523</Text>
          </View>
        </View>
        <View style={{
          marginLeft: 40,
          backgroundColor: '#FAF0EB',
          height: 205,
          width: 158,
          borderRadius: 12,
          paddingHorizontal: 10,
          paddingVertical: 31,
        }}>
          <WalletDarkIcon />
          <View style={{ marginHorizontal: 2, marginVertical: 20 }}>
            <Text style={{ fontSize: 13, color: '#E0D6D1', fontWeight: '400' }} >Main Card</Text>
            <Text style={{ fontSize: 35, color: '#8F4724', marginTop: 10, fontWeight: 'bold' }} >**5677</Text>
          </View>
          <MasterCardIcon />
        </View>
      </View>

      <View style={{
        marginLeft: 30,
        paddingVertical: 10,
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Expendixture breakdown</Text>
      </View>
    </>
  );
};

export default RecommendedPlaces;
