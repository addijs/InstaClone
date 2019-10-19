import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './style';

import FeedContainer from '../feed-container';
import List from '../list';
import ChatWindow from '../chat-window';

export default function MainContainer() {
  const show = useSelector(state => state.chat.showChatWindow);

  return (
    <Container>
      <FeedContainer />
      <div className={show ? 'chatOpen' : 'chatClosed'} >
        { show && <ChatWindow /> }
        <List />
      </div>
    </Container>
  );
}