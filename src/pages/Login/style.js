import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: 20px;
  width: 250px;
  height: 50px;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  background-color: #c9c9c9;
  justify-content: center;
  align-items: center;
`;