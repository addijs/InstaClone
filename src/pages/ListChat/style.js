import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const ListHeaderButton = styled.TouchableOpacity`
  width: 30px;
  justify-content: center;
`;

export const ListHeaderText = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin-left: 10px;
`;

export const UserButton = styled.TouchableOpacity`
  width: 40%;
  margin: 5px;
  padding: 10px;
  border-radius: 3px;
  background-color: #fff;
`;

export const UserName = styled.Text`
  font-size: 18px;
`;

export const ListEmptyText = styled.Text`
  margin-top: 100px;
  font-size: 22px;
  font-weight: bold;
  align-self: center;
`;