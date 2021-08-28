import * as React from 'react';
import { Container } from '@src/components/elements';
import { Place, mockRemarkablePlace } from '@src/data/mock-places';
import SpotListItem from '@src/components/common/SpotListItem';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

type SpotTabProps = {};

const SpotTab: React.FC<SpotTabProps> = ({ }) => {

  const navigation = useNavigation();

  return (
      <Container style={styles.tabContent}>
        <ScrollView>
        <SpotListItem />
        </ScrollView>
      </Container>
  );
};

export default SpotTab;
