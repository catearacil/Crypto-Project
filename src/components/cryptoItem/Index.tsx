import {
  NamesContainer,
  Container,
  Name,
  Symbol,
  Separator,
  Logo,
  ImgeValue,
  Value,
  Percent,
  ValueContainer,
  ArrowCont,
} from './style';

import React, {FC} from 'react';
import decreaseArrow from '../../assets/decreaseArrow.png';
import IncrementArrow from '../../assets/increaseArrow.png';

import {Crypto} from '../../interfaces/Index';

const CryptoItem: FC<Crypto> = ({id, name, symbol, img, market_data}) => (
  <Container>
    <Logo source={img} />
    <NamesContainer>
      <Name>{name}</Name>
      <Symbol>{symbol}</Symbol>
    </NamesContainer>
    <ValueContainer>
      <Value>${market_data.price_usd}</Value>
      <ArrowCont>
        <ImgeValue
          source={
            market_data.percent_change_usd_last_24_hours < 0
              ? decreaseArrow
              : IncrementArrow
          }
        />
        <Percent Percent={market_data.percent_change_usd_last_24_hours < 0}>
          {Math.abs(market_data.percent_change_usd_last_24_hours as number)}%
        </Percent>
      </ArrowCont>
    </ValueContainer>
    <Separator />
  </Container>
);

export default CryptoItem;
