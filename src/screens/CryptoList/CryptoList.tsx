import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableHighlight, Image, Button, TouchableOpacity } from 'react-native'
import { OpenModalText, NamesContainer, Name, Symbol, Logo } from './style';
import React from 'react'

const crypto = [
  {
    id: 'BCT',
    symbol: 'BCT',
    name: 'Bitcoin',
    price_usd: '1.234',
    percent_change_usd_last_24_hours: '1.82',
    img: require('../../assets/Bitcoin.png'),
  },
  {
    id: 'ETH',
    symbol: 'ETH',
    name: 'Ethereum',
    price_usd: '1.485',
    percent_change_usd_last_24_hours: '1.46',
    img: require('../../assets/Ethereum.png'),
  },
  {
    id: 'XRP',
    symbol: 'XRP',
    name: 'XRP',
    price_usd: '0.923',
    percent_change_usd_last_24_hours: '2.47',
    img: require('../../assets/XRP.png'),
  },

]

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 32
  },
  stretch: {
    width: 55,
    height: 55,
    borderRadius: 100 / 2,
    resizeMode: 'stretch',
  },
});

const AddCrypto = () => { };

const CryptoList = () => {

  return (
    <SafeAreaView>
      <FlatList
        data={crypto}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index, separators }) => {

          return (

            <TouchableHighlight
              key={item.name}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <View >
                <Logo source={item.img} />
                <NamesContainer>
                  <Name>{item.name}</Name>
                  <Symbol>{item.symbol}</Symbol>
                </NamesContainer>
                {/* <Image
                  style={styles.stretch}
                  source={item.img}
                /> */}
              </View>
            </TouchableHighlight>
          );
        }}
      />
      {<TouchableOpacity
        onPress={() =>
          AddCrypto()
        }>
        <OpenModalText>
          + Add CryptoCurrencies
        </OpenModalText>
      </TouchableOpacity>}
    </SafeAreaView>
  )

}

export default CryptoList