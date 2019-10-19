import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './style';

export default function List() {
  const users = useSelector(state => state.users);
  const chatUserSelected = useSelector(state => state.chat.chatUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if(chatUserSelected) {
      const filtered = users.filter(user => chatUserSelected[1] === user[1]);
      if(filtered.length > 0 && chatUserSelected[0] !== filtered[0][0]) {
        const user = filtered[0];
        dispatch({ type: 'SET_CHAT_USER', user });
      }
    }
  }, [users]);

  function handleChat(user) {
    dispatch({ type: 'SET_CHAT_USER', user });
  }

  return (
    <>
      <Container>
        <div className='list'>
          { users.length > 0 ? users.map(user => 
            <button 
              type='button' 
              onClick={() => handleChat(user)} 
              key={user[0]} 
              className='user'
            >
              <div className='icon'></div>
              <p>{user[1]}</p>
            </button> 
          ) : <p>Não há pessoas online :(</p> }
        </div>
      </Container>
    </>
  );
}