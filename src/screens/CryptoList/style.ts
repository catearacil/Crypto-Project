//@ts-ignore
import styled from 'styled-components/native';

/* colors: {
    black: 'black';
    white: '#fff';
    gray: 'gray';
    green: 'green';
    red: 'red';
    TopBarColor: '#385775';
    CryptoInputColor: 'rgb(251, 210, 77)';
    lightgray: 'rgba(56, 87, 117, 0.2)';
    darkblue: '#a8b5c3';
    dividergray: 'rgba(200, 222, 200, 1)';
  } */

export const Contener = styled.FlatList`
    backgroundColor:'#fff';
`

export const OpenModalText = styled.Text`
  margintop: 50px;
  fontsize: 16px;
  lineheight: 24px;
  color: rgba(56, 87, 117, 0.2);
  textalign: center;
  fontfamily: Inter;
`;

export const OneCrypto = styled.View`
  width: 88%;
  height: 100px;
  marginBottom: 10px;
  borderBottomWidth: 0.2px;
  borderBottomColor: solid #c8dec8;
  display:flex;
  alignSelf: center;
`;

export const NamesContainer = styled.View`
  width:25%;
  position: relative;
  left: 18%;
  bottom: 14%;
`;

export const Name = styled.Text`
  color: black;
  fontSize: 16px;
`;

export const Symbol = styled.Text`
  color: gray;
  fontSize: 14px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position:relative;
  left: 5px;
  top: 30px;
`;

export const Value = styled.Text`
  position: relative;
  fontSize: 16px;
  color: black;
  textAlign:right;
  bottom: 55%;
`;

export const Increase = styled.Text`
  position: relative;
  fontSize: 14px;
  color: green;
  left: 65%;
  bottom: 55%;
`;

export const Decrease = styled.Text`
  position: relative;
  fontSize: 14px;
  color: red;
  left: 65%;
  bottom: 55%;
`;

export const ArrowCont = styled.View`
  position:absolute;
  right:7%;
  top:60%;
`;
