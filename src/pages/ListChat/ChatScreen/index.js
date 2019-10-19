import React, { useState, useEffect } from 'react';
import { FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';

import { Header as ChatHeader } from '../../../components/Header';
import { 
  Container,
  ChatUser,
  MessagesContainer,
  Footer,
  MessageInput,
  SendMessageButton,
  Loading
} from './style';
import MessageBox from './MessageBox';
import IconsAD from 'react-native-vector-icons/AntDesign';
import IconsFA from 'react-native-vector-icons/FontAwesome';

export default function ChatScreen() {
  const socket = useSelector(state => state.connectedSocket);
  const chatUser = useSelector(state => state.chatUser);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.emit('get', [socket.id, chatUser[0]]);

    socket.on('messages', data => {
      setLoading(true);
      const newData = data.map((message, index) => {
        return {...message, id: index}
      });
      setMessages(newData.reverse());
      setLoading(false);
    });
  }, []);

  function sendMessage(data) {
    const messageTo = {
      from: socket.id,
      target: chatUser[0],
      message: data
    };

    socket.emit('message', messageTo);
    setNewMessage('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <ChatHeader>
          <IconsAD name='user' size={25} color='#333'/>
          <ChatUser>{chatUser[1]}</ChatUser>
        </ChatHeader>
        <MessagesContainer>
          <FlatList
            data={messages}
            keyExtractor={message => String(message.id)}
            renderItem={({ item }) => 
              <MessageBox data={item} chatUser={chatUser[1]}/>
            }
            ListFooterComponent={loading && <Loading />}
            inverted
          />
        </MessagesContainer>
        <Footer>
          <MessageInput
            value={newMessage}
            placeholder='Enter a kind message :)'
            onChangeText={text => setNewMessage(text)}
          />
          <SendMessageButton onPress={() => sendMessage(newMessage)}>
            <IconsFA name='send-o' size={24} color='#555' />
          </SendMessageButton>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}