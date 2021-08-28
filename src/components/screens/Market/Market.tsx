import * as React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, SafeAreaView, InteractionManager } from 'react-native';
import { SearchBar, LoadingIndicator } from '@src/components/elements';
import MarketList from './MarketList';
import AppReviewModal from '@src/components/common/AppReviewModal';

type HomeProps = {};

type Markets = {
  market: string;
  price: number;
}

const Home: React.FC<HomeProps> = () => {
  const [
    isNavigationTransitionFinished,
    setIsNavigationTransitionFinished,
  ] = React.useState(false);

  const [markets, setMarkets] = React.useState([]);
  const [coins, setCoins] = React.useState([{ id: 0, name: 'ETH' }, { id: 1, name: 'BTC' }, { id: 2, name: 'LTC' }]);
  //'ETH', 'BTC', 'LTC', 'XRP'

  const [ethereum, setEthereum] = React.useState(0);
  const [bitcoin, setBitcoin] = React.useState(0);
  const [litecoin, setLitecoin] = React.useState(0);
  const [ripple, setRipple] = React.useState(0);


  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setIsNavigationTransitionFinished(true);
      });
      return () => task.cancel();
    }, []),
  );

  const ws = React.useRef({});

  React.useEffect(() => {
    const ws = new WebSocket("wss://ws.kraken.com/");

    const marketsPushed: Markets[] = [];

    coins.forEach(element => {
      console.log('element', element);

      ws.onopen = () => ws.send(JSON.stringify({
        event: "subscribe",
        pair: [
          `${element.name}/USD`,
          `${element.name}/USD`,
          `${element.name}/USD`,
          `${element.name}/USD`,
        ],
        subscription: {
          name: "ticker"
        }
      }))
    });

    ws.onmessage = (message) => {
      let krakenData = JSON.parse(message.data);

      console.log('message', !krakenData.event && parseFloat(krakenData[1].a[0]).toFixed(2))

      marketsPushed.push({ market: 'ETH', price: !krakenData.event && krakenData && parseFloat(krakenData[1].a[0]).toFixed(2) })

      //console.log('krakenDataParse', !krakenData.event && krakenData && parseFloat(krakenData[1].a[0]).toFixed(2));
      //setEthereum(!krakenData.event && krakenData && parseFloat(krakenData[1].a[0]).toFixed(2));

      //const market = { market: element, price: !krakenData.event && krakenData && parseFloat(krakenData[1].a[0]).toFixed(2) }
    };

    console.log('marketsPushed', marketsPushed);

    //coins.forEach(element => {


    setInterval(() => {
      //console.log('ethereum price', ethereum);
    }, 3000)
    //});

    return () => {
      ws.close();
    };
  }, []);

  return (
    <SafeAreaView>
      <ScrollView stickyHeaderIndices={[0]}>
        <SearchBar placeholder="Find tokens, smart contracts, markets..." />
        {/**<PopularCategories /> */}
        {isNavigationTransitionFinished ? (
          <>
            <MarketList ethereumPrice={ethereum} />
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
