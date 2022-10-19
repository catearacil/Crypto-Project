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
const CryptoItem = ({id, name, symbol, img, market_data}: Crypto) => {
 
  return (
    <View>
      <Contener>
        <Logo source={img} />
        <NamesContainer>
          <Name>{name}</Name>
          <Symbol>{symbol}</Symbol>
        </NamesContainer>
        <ValueContener>
          <Value>${market_data.price_usd}</Value>
          <ArrowCont>
            <ImgeValue
              source={
                market_data.percent_change_usd_last_24_hours < 0
                  ? decreaseArrow
                  : IncrementArrow
              }
            />
            <Percent Porcent={market_data.percent_change_usd_last_24_hours}>
              {Math.abs(market_data.percent_change_usd_last_24_hours as number)}
              %
            </Percent>
          </ArrowCont>
        </ValueContener>
      </Contener>
      <Separador />
    </View>
  );
};

export default CryptoItem;
