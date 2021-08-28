import * as React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, SafeAreaView, InteractionManager } from 'react-native';
import { SearchBar, LoadingIndicator } from '@src/components/elements';
import PopularPlaces from './PopularPlaces';
import RecommendedPlaces from './RecommendedPlaces';
import MerchantCampaigns from './MerchantCampaigns';
import PopularCategories from './PopularCategories';
import HotDeals from './HotDeals';
import RemarkablePlaces from './RemarkablePlaces';
import AppReviewModal from '@src/components/common/AppReviewModal';
import { AppleHeader, ModernHeader, ProfileHeader } from "@freakycoder/react-native-header-view";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [
    isNavigationTransitionFinished,
    setIsNavigationTransitionFinished,
  ] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setIsNavigationTransitionFinished(true);
      });
      return () => task.cancel();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView stickyHeaderIndices={[0]}>
        <ProfileHeader
          profileImageSource={require('../../../assets/profile/pp.jpeg')}
          profileImageStyle={{ height: '10%', width: '10%' }}
        />

        {/**<PopularCategories /> */}
        {isNavigationTransitionFinished ? (
          <>
            {/*<PopularPlaces />*/}
            {/*<MerchantCampaigns />*/}
            <RecommendedPlaces />
            {/**<HotDeals /> */}
            {/*<RemarkablePlaces />*/}
          </>
        ) : (
          <LoadingIndicator size="large" hasMargin />
        )}
      </ScrollView>
      <AppReviewModal daysBeforeReminding={1} />
    </SafeAreaView>
  );
};

export default Home;
