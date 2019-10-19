import React from 'react';

import { Container, MessageText } from './style';

export default function MessageBox({ data, chatUser }) {
  return (
    <Container user={{ data, chatUser }}>
      {/* <UserText>{data.from}</UserText> */}
      <MessageText>{data.message}</MessageText>
    </Container>
  );
}