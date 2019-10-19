import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSend, MdClose } from 'react-icons/md';
import { Container } from './style';

export default function ChatWindow() {
  const socket = useSelector(state => state.connectedSocket);
  const chatUser = useSelector(state => state.chat.chatUser);
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  useEffect(() => {
    socket.emit('get', [socket.id, chatUser[0]]);

    socket.on('messages', data => {
      setMessages(data);
    });
  }, []);

  function sendMessage(data) {
    const messageTo = {
      from: socket.id,
      target: chatUser[0],
      message: data
    };

    socket.emit('message', messageTo);
    document.querySelector('div .footer input').value = '';
  }

  function closeWindow() {
    dispatch({ type: 'CLOSE_CHAT_WINDOW', user: null });
  }

  return (
    <Container>
      <div className='header'>
        <img alt='user-avatar' src='https://api.adorable.io/avatars/170/abott@adorable.png'></img>
        <p>{chatUser[1]}</p>
        <button type='button'>
          <div className='close-icon' onClick={() => {
            closeWindow();
          }}>
            <MdClose size={15} />
          </div>
        </button>
      </div>
      <div className='container'>
        <div className='messages'>
          { messages.map((data, index) => 
              <div className={`msg ${data.from === sessionStorage.getItem('user') ?
                'loggedUser' : 'chatUser'}`} key={index}>
                <strong>{data.from}</strong>
                <p>{data.message}</p>
              </div> 
            )
          }
        </div>
      </div>
      <div className='footer'>
        <input 
          type='text' 
          placeholder='Enter something kind! :3'
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button 
          type='button' 
          onClick={() => sendMessage(newMessage)}
        >
          <div className='send-icon'>
            <MdSend size={18} />
          </div>
        </button>
      </div>
    </Container>
  );
}