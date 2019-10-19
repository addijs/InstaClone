import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #333;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
`;