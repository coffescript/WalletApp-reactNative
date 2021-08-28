import * as React from 'react';
import { Container } from '@src/components/elements';
import { Place, mockRemarkablePlace } from '@src/data/mock-markets';
import MarketListItem from '@src/components/common/MarketListItem';
import styles from './styles';

type MarketsTabProps = {};

const MarketsTab: React.FC<MarketsTabProps> = () => {
  return (
    <Container style={styles.tabContent}>
      {mockRemarkablePlace.featured.map((item: Place) => {
        return <MarketListItem key={item.id} data={item} />;
      })}
    </Container>
  );
};

export default MarketsTab;
