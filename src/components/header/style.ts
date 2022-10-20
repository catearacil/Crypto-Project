import styled from 'styled-components/native';
import theme from '../utils/theme';

export const ImageStyle = styled.Image`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 10%;
  top: 50%;
  border-radius: 100px;
`;

export const Head = styled.View`
  padding: 24px;
  height: 100px;
  background-color: ${theme.colors.header};
`;

export const Title = styled.Text`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  position: relative;
  top: 25%;
`;
