import {View} from 'react-native';
import {
  NamesContainer,
  Contener,
  Name,
  Symbol,
  Logo,
  ImgeValue,
  Separador,
  Value,
  Percent,
  ValueContener,
  ArrowCont,
} from './cryptoStyle';
import React from 'react';

const decreaseArrow = require('../../assets/decreaseArrow.png');
const IncrementArrow = require('../../assets/increaseArrow.png');

import {Crypto} from '../../interfaces/cryptoInterface';
const CryptoItem = ({id, name, symbol, img, slug, market_data}: Crypto) => {
  const percent = market_data.percent_change_usd_last_24_hours;
  const price = market_data.price_usd;

  return (
    <View>
      <Contener>
        <Logo source={img} />
        <NamesContainer>
          <Name>{name}</Name>
          <Symbol>{symbol}</Symbol>
        </NamesContainer>
        <ValueContener>
          <Value>${price}</Value>
          <ArrowCont>
            <ImgeValue source={percent < 0 ? decreaseArrow : IncrementArrow} />
            <Percent Porcent={percent}>{Math.abs(percent as number)}%</Percent>
          </ArrowCont>
        </ValueContener>
      </Contener>
      <Separador />
    </View>
  );
};

export default CryptoItem;
