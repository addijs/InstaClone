import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import { Container } from './style';
import { MdCameraAlt } from 'react-icons/md';

export default function CreatePostContainer({ value, cb }) {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null
  }, [image]);

  async function submit() {
    const data = new FormData();
    data.append('user', sessionStorage.getItem('user'));
    data.append('description', desc);
    data.append('postThumb', image);

    await api.post('/posts', data);

    setImage(null);
    document.querySelector('.inputs input').value = '';
    document.querySelector('.container input').value = '';

    cb(value+1);
  }

  return (
    <Container>
      <h3>Criar publicação</h3>
      <div className='container'>
        <label 
          id='thumb' 
          style={{ backgroundImage: `url(${preview})` }}
          className={image ? 'has-image' : ''}
        >
          <input type='file' id='image' onChange={e => setImage(e.target.files[0])}/>
          <MdCameraAlt size={25} />
        </label>
      </div>
      <div className='inputs'>
        <input type='text' onChange={e => setDesc(e.target.value)} placeholder='Description' />
        <button type='button' onClick={submit}>Send</button>
      </div>
    </Container>
  );
}