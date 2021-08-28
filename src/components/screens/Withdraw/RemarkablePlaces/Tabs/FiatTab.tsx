import * as React from 'react';
import { Container } from '@src/components/elements';
import { Place, mockRemarkablePlace } from '@src/data/mock-places';
import SpotListItem from '@src/components/common/SpotListItem';
import styles from './styles';
import WithdrawListItem from '@src/components/common/WithdrawListItem';

type SpotTabProps = {};

const SpotTab: React.FC<SpotTabProps> = () => {
  return (
    <Container style={styles.tabContent}>
      <WithdrawListItem />
    </Container>
  );
};

export default SpotTab;
