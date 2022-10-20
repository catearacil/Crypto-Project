import {Head, ImageStyle, Title} from './style';
import React from 'react';

const Header = () => (
  <Head>
    <ImageStyle
      source={{
        uri: 'https://cdn.lorem.space/images/face/.cache/60x60/hazel-aksoy-UcTI5ge05so-unsplash.jpg',
      }}
    />
    <Title>CryptoTracker Pro</Title>
  </Head>
);
export default Header;
