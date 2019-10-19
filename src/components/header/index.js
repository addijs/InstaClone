import React, { useState } from 'react';
import { Container } from './style';
import { MdChatBubble, MdPersonOutline } from 'react-icons/md'

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <h3>InstaClone!</h3>
      <input type='text' name='search' placeholder='Search' />
      <div className='buttons'>
        <button onClick={() => setShow(!show)}>
          <div className='chat-icon'>
            <MdChatBubble size={30} />
          </div>
        </button>
        <button type='button'>
          <div className='person-icon'>
            <MdPersonOutline size={30}  />
          </div>
        </button>
      </div>
    </Container>
  );
}