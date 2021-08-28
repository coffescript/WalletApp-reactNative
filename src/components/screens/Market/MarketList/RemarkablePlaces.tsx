import * as React from 'react';
import { Container } from '@src/components/elements';
import { MarketsTab, NewestTab, TrendingTab } from './Tabs';
import { TabView } from '@src/components/elements';
import styles from './styles';
import { TabViewData } from '@src/components/elements/TabView/TabView';

type RemarkablePlacesProps = {
  ethereumPrice: number;
};

const tabData: TabViewData = [
  { key: '0', title: 'Featured', content: MarketsTab },
  {
    key: '1',
    title: 'Newest',
    content: NewestTab,
  },
  {
    key: '3',
    title: 'Trending',
    content: TrendingTab,
  },
];

const RemarkablePlaces: React.FC<RemarkablePlacesProps> = ({ ethereumPrice }) => {


  React.useEffect(() => {
    console.log('ethereumPrice', ethereumPrice);
  }, [])

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
