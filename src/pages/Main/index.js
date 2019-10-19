import React, { useState, useEffect } from 'react';
import { BackHandler, FlatList, AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import api from '../../services/api';

import Card from './Card'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../../components/Header';
import { HeaderText, HeaderButton, Loading } from './style';

export default function Main({ navigation }){
  const users = useSelector(state => state.users);
  const chatUserSelected = useSelector(state => state.chatUser);
  const socket = useSelector(state => state.connectedSocket);
  const dispatch = useDispatch();
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  
  async function getLoggedUser() {
    const res = await AsyncStorage.getItem('user');
    if(!res) navigation.navigate('Login');
    return res;
  }

  async function loadPosts() {
    setLoading(true);
    const res = await api.get('/posts');
    setPosts(res.data.reverse());
    setLoading(false);
  }

  async function refreshPosts() {
    setRefresh(true);
    await loadPosts();
    setRefresh(false);
  }

  function exit() {
    BackHandler.exitApp();
  }

  useEffect(() => {
    if(chatUserSelected) {
      const filtered = users.filter(user => chatUserSelected[1] === user[1]);
      if(filtered.length > 0 && chatUserSelected[0] !== filtered[0][0]) {
        const user = filtered[0];
        dispatch({ type: 'SET_CHAT_USER', user });
        console.log('trocou');
      }
    }
  }, [users]);

  useEffect(() => {
    const didFocus = navigation.addListener('didFocus', payload => {
      BackHandler.addEventListener('hardwareBackPress', exit);
    });
    
    const willBlur = navigation.addListener('willBlur', payload => {
      BackHandler.removeEventListener('hardwareBackPress', exit)
    });

    return () => {
      didFocus.remove();
      willBlur.remove();
    }
  }, []);
  
  useEffect(() => {
    getLoggedUser().then(user => {
      if(socket) return 0;
      if(user) {
        const socket = io('http://localhost:5002', {
          query: { user }
        });
  
        dispatch({ type: 'SET_CONNECTED_SOCKET', socket });
  
        socket.on('users', users => {
          const usersArray = [];
          for (let x in users) {
            if (users[x] !== user) usersArray.push([x, users[x]]);
          }
          dispatch({ type: 'SET_USERS', usersArray });
        });
      } else {
        navigation.navigate('Login');
      }
    });
  }, []);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <Header style={{ justifyContent: 'space-between' }}>
        <HeaderButton onPress={() => navigation.navigate('CreatePost')}>
          <Icons name='photo-camera' size={30} color='#333' />
        </HeaderButton>
        <HeaderText>InstaClone!</HeaderText>
        <HeaderButton onPress={() => navigation.navigate('ListChat')}>
          <Icons name='send' size={25} color='#333' />
        </HeaderButton>
      </Header>
      <FlatList
        data={posts}
        keyExtractor={post => String(post._id)}
        renderItem={({ item }) => <Card data={item}/>}
        onRefresh={refreshPosts}
        refreshing={refresh}
        ListFooterComponent={loading && <Loading />}
      >
      </FlatList>
    </>
  );
}