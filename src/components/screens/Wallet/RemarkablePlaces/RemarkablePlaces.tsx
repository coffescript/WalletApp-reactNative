import * as React from 'react';
import { Container } from '@src/components/elements';
import { ResumeTab, SpotTab, TrendingTab } from './Tabs';
import { TabView } from '@src/components/elements';
import styles from './styles';
import { TabViewData } from '@src/components/elements/TabView/TabView';
import { ScrollView } from 'react-native-gesture-handler';

type RemarkablePlacesProps = {};

const tabData: TabViewData = [
  { key: '0', title: 'Resume', content: ResumeTab },
  {
    key: '1',
    title: 'Spot',
    content: SpotTab,
  },
  {
    key: '3',
    title: 'P2P',
    content: TrendingTab,
  },
];

const RemarkablePlaces: React.FC<RemarkablePlacesProps> = () => {
  return (
    <ScrollView>
      <Container style={styles.container}>

        <TabView
          tabData={tabData}
          tabBarStyle={styles.tabBarStyle}
          isTabBarFullWidth
        />
      </Container>
    </ScrollView>
  );
};

export default RemarkablePlaces;
