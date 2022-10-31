import {Crypto} from '../../interfaces/Index';

const crypto: Crypto[] = [
  {
    id: '1',
    symbol: 'BCT',
    name: 'Bitcoin',
    img: require('../../assets/Bitcoin.png'),
    slug: 'bitcoin',
    market_data: {
      price_usd: 7215.68,
      percent_change_usd_last_24_hours: 1.82,
    },
  },
  {
    id: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    img: require('../../assets/Ethereum.png'),
    slug: 'ethereum',
    market_data: {
      price_usd: 146.83,
      percent_change_usd_last_24_hours: 1.46,
    },
  },
  {
    id: '3',
    symbol: 'XRP',
    name: 'XRP',
    slug: 'xrp',
    img: require('../../assets/XRP.png'),
    market_data: {
      price_usd: 0.220568,
      percent_change_usd_last_24_hours: -2.47,
    },
  },
  {
    id: '4',
    symbol: 'LTC',
    name: 'Litecoin',
    slug: 'litecoin',
    img: require('../../assets/Litecoin.png'),
    market_data: {
      price_usd: 1111,
      percent_change_usd_last_24_hours: -2.47,
    },
  },
];

export default crypto;
