import {SafeAreaView, TouchableOpacity} from 'react-native';
import {AddCrypto, List} from './cryptoStyle';
import CryptoItem from '../../components/cryptoItem/CryptoItem';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header/Header';

const crypto = [
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
];

const CryptoList = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <Header />
      <List>
        {crypto.map(item => (
          <CryptoItem key={item.id} {...item} />
        ))}
      </List>

      {
        <TouchableOpacity
          onPress={() =>
            //@ts-ignore
            navigation.navigate('AddCrypto')
          }
          style={{width: '100%'}}>
          <AddCrypto>+ Add a Cryptocurrency</AddCrypto>
        </TouchableOpacity>
      }
    </SafeAreaView>
  );
};

export default CryptoList;
