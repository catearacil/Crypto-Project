//@ts-ignore
import styled from 'styled-components/native';
import {colors} from '../../components/utils/colors';

export const Contener = styled.FlatList`
  background-color: ${colors.white};
`;

export const List = styled.View`
  margin-left: 23px;
  margin-right: 25px;
`;

export const AddCrypto = styled.Text`
  margin-top: 50px;
  font-size: 18px;
  line-height: 24px;
  background-color: ${colors.blue};
  color: ${colors.bluegray};
  text-align: center;
  font-family: Inter;
`;

export const OpenModalText = styled.Text`
  margin-top: 49px;
  font-size: 19px;
  line-height: 24px;
  color: ${colors.bluegray};
  text-align: center;
  font-family: Inter;
`;

export const OneCrypto = styled.View`
  width: 88%;
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  align-self: center;
`;

export const NamesContainer = styled.View`
  width: 25%;
  position: relative;
  left: 18%;
  bottom: 14%;
`;

export const Name = styled.Text`
  color: ${colors.black};
  font-size: 16px;
`;

export const Symbol = styled.Text`
  color: ${colors.gray};
  font-size: 14px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: relative;
  left: 5px;
  top: 30px;
`;

export const Value = styled.Text`
  position: relative;
  font-size: 16px;
  color: ${colors.gray};
  text-align: right;
  bottom: 55%;
`;

export const Increase = styled.Text`
  position: relative;
  font-size: 14px;
  color: ${colors.green};
  left: 65%;
  bottom: 55%;
`;

export const Decrease = styled.Text`
  position: relative;
  font-size: 14px;
  color: ${colors.red};
  left: 65%;
  bottom: 55%;
`;

export const ArrowCont = styled.View`
  position: absolute;
  right: 7%;
  top: 60%;
`;
