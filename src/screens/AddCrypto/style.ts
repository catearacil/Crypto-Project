import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container= styled.View`
  display:flex;
`

export const CryptoInput = styled.TextInput`
  border: 2px solid ${theme.colors.gray};
  width: 90%;
  height: 60px;
  position: relative;
  top: 29%;
  margin: 5%;
  borderRadius: 6px;
  paddingLeft: 10px;
  fontSize: 17px;
  
  
`;

export const AddText = styled.Text`
  fontSize: 26px;
  color: ${theme.colors.darkGray};
  position: relative;
  top: 28.5%;
  left: 6%;
  lineheight: 30px;
  fontWeight: 700;
  fontFamily: Inter;
  letterSpacing: 0px;
`;

export const BackText = styled.Text`
  fontSize: 17px;
  lineHeight: 24px;
  fontWeight: 400;
  color: ${theme.colors.blueGray};
  paddingLeft: 16px;
  marginTop: 14px
  fontFamily: Inter;
`;

export const OpenModalText = styled.Text`
  marginTop: 50px;
  fontSize: 17px;
  lineHeight: 24px;
  color: ${theme.colors.white};
  textAlign:center;
  fontFamily: Inter;
`;

export const ModalText = styled.Text`
  fontSize: 18px;
  color: ${theme.colors.gray};
  backgroundColor:${theme.colors.yellow};
  textAlign: center;
  textAlignVertical: center;
  width: 160px;
  height: 48px;
  borderRadius: 6px;
`;

export const Touchable = styled.TouchableOpacity`
  width: 155px;
  height: 48px;
  left: 54%;
  top: 28%;
`
