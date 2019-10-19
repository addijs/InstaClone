import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  Container, 
  UserButton, 
  UserName,
  ListHeaderButton,
  ListHeaderText,
  ListEmptyText,
} from './style';
import { Header as ListHeader } from '../../components/Header';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function ListChat({ navigation }) {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  function handleChat(user) {
    dispatch({ type: 'SET_CHAT_USER', user });
    navigation.navigate('ChatScreen');
  }

  return (
    <Container>
      <ListHeader>
        <ListHeaderButton onPress={() => navigation.pop()}>
          <Icons name='arrow-back' size={24} color='#333'/>
        </ListHeaderButton>
        <ListHeaderText>Direct</ListHeaderText>
      </ListHeader>
      { users.length > 0 ? users.map(user => 
        <UserButton 
          onPress={() => handleChat(user)} 
          key={user[0]}
        >
          <UserName>{user[1]}</UserName>
        </UserButton> 
      ) : <ListEmptyText>Não há pessoas online :(</ListEmptyText> }
    </Container>   
  );
}