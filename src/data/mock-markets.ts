import { ImageSourcePropType } from 'react-native';

const faker = require('faker');

export type CoinBase = {
  id: string;
  title: string;
  description: string;
  price: string;
  change_24hours: string;
  image?: ImageSourcePropType;
  coverImage?: ImageSourcePropType;
  sideDishes?: DishSection[];
};

export type DishSection = {
  title: string;
  data: CoinBase[];
};

export type Place = {
  id: string;
  title: string;
  market: string;
  coinbase: string;
  coinsecondary: string;
  price: number;
  change_24hours: string;
  coverImage?: ImageSourcePropType;
  image: ImageSourcePropType;
  subTitle: string;
  distance: number;
  time: number;
  rating: number;
  dishSection?: DishSection[];
};

export type RemarkablePlaceTab = {
  [name: string]: Place[];
};

export const mockDishDetails: CoinBase = {
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  description: faker.lorem.lines(3),
  price: faker.commerce.price(5, 60),
  change_24hours: '+3.96%',
  coverImage: require('@src/assets/dish-details/cover-photo.jpg'),
  sideDishes: [
    {
      title: 'Cake',
      data: Array(5)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          change_24hours: '+3.96%',
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Drink',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          change_24hours: '+3.96%',
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
    {
      title: 'Salad',
      data: Array(6)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          change_24hours: '+3.96%',
          image: require('@src/assets/dish-details/dish-3.jpg'),
        })),
    },
  ],
};

export const mockPlaceDetails: Place = {
  id: '1',
  coinbase: 'Bitcoin',
  coinsecondary: 'Ethereum',
  price: 2133.03,
  market: 'ETH/BTC',
  title: '',
  change_24hours: '+3.96%',
  coverImage: require('@src/assets/place-details/cover-photo.jpg'),
  image: require('@src/assets/place-details/main-photo.jpg'),
  subTitle: 'Western, Spaghetti',
  distance: 75,
  time: 90,
  rating: 4,
  dishSection: [
    {
      title: 'Burgers',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          change_24hours: '+3.96%',
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Pizza',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          change_24hours: '+3.96%',
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
    {
      title: 'Sushi and rolls',
      data: Array(4)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          change_24hours: '+3.96%',
          image: require('@src/assets/dish-details/dish-3.jpg'),
        })),
    },
    {
      title: 'Pasta',
      data: Array(4)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          change_24hours: '+3.96%',
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Dessert',
      data: Array(6)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          change_24hours: '+3.96%',
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
  ],
};

export const mockPlaceList: Place[] = Array(10)
  .fill(0)
  .map((_) => {
    const image = require('@src/assets/place-details/main-photo.jpg');
    return {
      id: faker.random.uuid(),
      title: faker.commerce.department(),
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      image,
      subTitle: faker.lorem.lines(2),
      distance: 75,
      time: 90,
      rating: 4,
    };
  });

export const mockPlaces: Place[] = Array(3)
  .fill(0)
  .map((_) => {
    const image = require('@src/assets/gradients/background_gradient.png');
    return {
      id: faker.random.uuid(),
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      change_24hours: '+3.96%',
      price: 2133.03,
      market: 'ETH/BTC',
      title: faker.commerce.department(),
      image,
      subTitle: faker.lorem.lines(2),
      distance: 75,
      time: 90,
      rating: 4,
    };
  });

export const mockRemarkablePlace: RemarkablePlaceTab = {
  featured: [
    {
      id: '1',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
  newest: [
    {
      id: '1',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
  trending: [
    {
      id: '1',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      coinbase: 'Bitcoin',
      coinsecondary: 'Ethereum',
      price: 2133.03,
      change_24hours: '+3.96%',
      market: 'ETH/BTC',
      title: '',
      image: require('@src/assets/gradients/background_gradient.png'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
};
