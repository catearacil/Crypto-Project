import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.View`
  padding-top: 7px;
  padding-bottom: 8px;
  display: flex;
  border-bottom-color: ${theme.colors.black};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 11px;
  background-color: ${theme.colors.dividerGray};
`;

export const OneCrypto = styled.View`
  width: 88%;
  height: 100px;
  margin-bottom: 10px;
  border-bottom: 1px;
  border-bottom-color: ${theme.colors.dividerGray};
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
  color: ${theme.colors.black};
  font-size: 17px;
  font-weight: 500;
`;

export const Symbol = styled.Text`
  color: ${theme.colors.gray};
  font-size: 15px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: relative;
  left: 5px;
  top: 30px;
`;

export const ValueContainer = styled.View`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-top: -55px;
`;

export const Value = styled.Text`
  font-size: 19px;
  font-weight: 500;
  color: ${theme.colors.black};
  text-align: right;
`;
export const ArrowContainer = styled.View`
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
  color: ${({percent}: {percent: boolean}) => (percent ? 'red' : 'green')};
`;
