//@ts-ignore
import styled from 'styled-components/native';
import {colors} from '../utils/colors';

export const ImageStyle = styled.Image`
    width: 50px;
    height: 50px;
    position:absolute;
    right: 10%;
    top: 50%;
    border-radius: 100px
    `;

export const Head = styled.View`
    padding: 24px;
    height: 100px;
    background-color: ${colors.header};
`;

export const Title = styled.Text`
    color: ${colors.white};
    font-size: 20px;
    font-weight: bold;
    position:relative;
    top: 25%;
`;