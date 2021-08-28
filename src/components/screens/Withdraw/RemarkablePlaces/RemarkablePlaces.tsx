import * as React from 'react';
import {Container} from '@src/components/elements';
import {CryptoTab, FiatTab, TrendingTab} from './Tabs';
import {TabView} from '@src/components/elements';
import styles from './styles';
import {TabViewData} from '@src/components/elements/TabView/TabView';

type RemarkablePlacesProps = {};

const tabData: TabViewData = [
  {key: '0', title: 'Criptomoneda', content: CryptoTab},
  {
    key: '1',
    title: 'Fiat',
    content: FiatTab,
  },
];

const RemarkablePlaces: React.FC<RemarkablePlacesProps> = () => {
  return (
    <Container style={styles.container}>
      <TabView
        tabData={tabData}
        tabBarStyle={styles.tabBarStyle}
        isTabBarFullWidth
      />
    </Container>
  );
};

export default RemarkablePlaces;
