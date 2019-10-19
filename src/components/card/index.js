import React from 'react';
import { Container } from './style';
import { MdComment, MdThumbUp } from 'react-icons/md';

export default function Card({ data }) {
  return (
    <Container>
      <div className='card'>
        <div className='header'>
          <img src='https://api.adorable.io/avatars/170/abott@adorable.png' alt='' />
          <p><strong>{data.user}</strong></p>
        </div>
        <div className='img' style={{ backgroundImage: `url(${data.postThumbURL})` }} alt='' />
        <div className='footer'>
          <div className='icons'>
            <div className='like'>
              <MdThumbUp size={25} />
            </div>
            <div className='comment'>
              <MdComment size={25} />
            </div>
          </div>
          <div className='description'>
            <p><strong>{data.user}</strong></p>
            <p>{data.description}</p>
          </div>
        </div>
      </div> 
    </Container>
  );
}