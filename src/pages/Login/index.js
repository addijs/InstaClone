import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
  Text, 
  TouchableWithoutFeedback, 
  Keyboard,
  AsyncStorage
} from 'react-native';

import { Container, Input, Button } from './style';

export default function LoginForm({ navigation }) {
  let socket = useSelector(state => state.connectedSocket);
  const [user, setUser] = useState('');

  useEffect(() => {
    if(socket) navigation.navigate('Main');
  });

  async function send() {
    if(!user) return alert('Enter your nick, please')
    await AsyncStorage.setItem('user', user);
    navigation.navigate('Main');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Input
          autoCorrect={false}
          placeholder='Nickname'
          onChangeText={text => setUser(text)}
        />
        <Button onPress={send}>
          <Text>Sign In</Text>
        </Button>
      </Container>
    </TouchableWithoutFeedback>
  );
}