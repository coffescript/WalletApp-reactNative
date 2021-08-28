import * as React from 'react';
import { Container } from '@src/components/elements';
import { Place, mockRemarkablePlace } from '@src/data/mock-places';
import WalletsListItem from '@src/components/common/WalletsListItem';
import styles from './styles';

type FeaturedTabProps = {};

const FeaturedTab: React.FC<FeaturedTabProps> = () => {
  return (
    <Container style={styles.tabContent}>
      <WalletsListItem />
    </Container>
  );
};

export default FeaturedTab;
