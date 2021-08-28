import * as React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, SafeAreaView, InteractionManager } from 'react-native';
import { SearchBar, LoadingIndicator } from '@src/components/elements';
import RemarkablePlaces from './RemarkablePlaces';
import AppReviewModal from '@src/components/common/AppReviewModal';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

type WithdrawProps = {};

const Withdraw: React.FC<WithdrawProps> = () => {
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
      <ScrollView>
        <LinearGradient
          colors={['#ca9bf7', '#89cff0']}
          style={styles.linearContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <SearchBar placeholder="Find tokens, smart contracts, markets..." />
          {/**<PopularCategories /> */}
          {isNavigationTransitionFinished ? (
            <>
              <RemarkablePlaces />
            </>
          ) : (
            <LoadingIndicator size="large" hasMargin />
          )}
        </LinearGradient>
      </ScrollView>
      <AppReviewModal daysBeforeReminding={1} />
    </SafeAreaView>
  );
};

export default Withdraw;
