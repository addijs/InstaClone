import React from 'react';
import { Text } from 'react-native';

import { 
  Container, 
  Header, 
  Avatar, 
  PostImage, 
  Footer, 
  Description 
} from './style';

export default function Card({ data }) {
  return (
    <Container>
      <Header>
        <Avatar measurements={30} source={{ uri: 'https://api.adorable.io/avatars/170/abott@adorable.png' }}/>
        <Text>{data.user}</Text>
      </Header>
      <PostImage source={{ uri: data.postThumbURL } }/>
      <Footer>
        <Description>
          <Text style={{ fontWeight: 'bold' }}>{data.user}</Text>
          <Text>{data.description}</Text>
        </Description>
      </Footer>
    </Container>
  );
}