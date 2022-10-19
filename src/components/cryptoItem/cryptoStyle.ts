//@ts-ignore
import styled from 'styled-components/native';
import {colors} from '../utils/colors';

export const Contener = styled.View`
  padding-top: 7px;
  padding-bottom: 8px;
  display: flex;
`;

export const Separador = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 11px;
  background-color: ${colors.dividergray};
`;

export const OneCrypto = styled.View`
  width: 88%;
  height: 100px;
  margin-bottom: 10px;
  border-bottom: 0.2px;
  border-bottom-color: ${colors.dividergray};
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
  font-size: 17px;
  font-weight: 500;
`;

export const Symbol = styled.Text`
  color: ${colors.gray};
  font-size: 15px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: relative;
  left: 5px;
  top: 30px;
`;

export const ValueContener = styled.View`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-top: -55px;
`;

export const Value = styled.Text`
  font-size: 19px;
  font-weight: 500;
  color: ${colors.black};
  text-align: right;
`;
export const ArrowCont = styled.View`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

export const ImgeValue = styled.Image`
  width: 10px;
  height: 10px;
  margin-right: 4px;
  padding-top: 2px;
`;

export const Percent = styled.Text`
  font-size: 16px;
  color: ${(p: any) => (p.Porcent < 0 ? 'red' : 'green')};
`;
