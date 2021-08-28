import React, { useCallback, useMemo, useRef } from 'react';
import { Container } from '@src/components/elements';
import { Place, mockRemarkablePlace } from '@src/data/mock-places';
import PlaceListItem from '@src/components/common/PlaceListItem';

import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles';

import WithdrawFormListItem from '@src/components/common/WithdrawListItem/WithdrawFormListItem';

type TrendingTabProps = {};

const TrendingTab: React.FC<TrendingTabProps> = () => {

  // hooks
  const bottomSheetRef = useRef<BottomSheet>(null);


  return (
    <Container style={styles.tabContent}>
      <WithdrawFormListItem />
    </Container>
  );
};

export default TrendingTab;

/**
 * {mockRemarkablePlace.trending.map((item: Place) => {
        return <PlaceListItem key={item.id} data={item} />;
      })}
 */