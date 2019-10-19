import React, { useState } from 'react';

import { Container } from './style';

export default function LoginForm({ history }) {
  const [name, setName] = useState('');

  function change(e) {
    return setName(e.target.value);
  }

  async function send() {
    sessionStorage.setItem('user', name);
    history.push('/main');
  }

  return (
    <Container>
      <div className='login-form'>
        <input type='text' placeholder='Your nickname' onChange={change}/>
        <button type='button' onClick={send}><strong>Sign In</strong></button>
      </div>
    </Container>
  );
}