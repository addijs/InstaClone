import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Container } from './style';

import CreatePostContainer from '../create-post';
import Card from '../card';

export default function FeedContainer() {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    async function loadPosts() {
      const res = await api.get('/posts');
      setPosts(res.data.reverse());
    }

    loadPosts();
  }, [refresh]);
  
  return (
    <Container>
      <CreatePostContainer value={refresh} cb={setRefresh}/>
      { posts.length > 0 ? 
        posts.map((post, index) => <Card key={index} data={post} />) :
        <h2>Não há posts. Gostaria de postar algo?</h2>
      }
    </Container>
  );
}