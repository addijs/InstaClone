import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ChatUser = styled.Text`
  font-size: 20px;
  margin-left: 10px;
`;

export const MessagesContainer = styled.View`
  flex: 1;
  padding: 20px 15px;
`;

export const Footer = styled.View`
  padding: 10px 0;
  width: 100%;
  height: 65px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MessageInput = styled.TextInput`
  font-size: 18px;
  width: 70%;
  height: 100%;
  padding: 0 15px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 5px;
`;

export const SendMessageButton = styled.TouchableOpacity`
  margin-left: 20px;
`;


export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;