import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import Header from '../components/header';
import MainContainer from '../components/main-container';

export default function Main({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = sessionStorage.getItem('user');

    if(user) {
      const socket = io('http://localhost:5002', {
        query: { user }
      });

      dispatch({ type: 'SET_CONNECTED_SOCKET', socket });

      socket.on('users', users => {
        const usersArray = [];
        for (let x in users) {
          if (users[x] !== sessionStorage.getItem('user')) usersArray.push([x, users[x]]);
        }
        dispatch({ type: 'SET_USERS', usersArray });
      });
    } else {
      history.push('/');
    }
  }, []);

  return (
    <>
      { !sessionStorage.getItem('user') ? (
        <>
          <h1>That session has expired!</h1>
          <p>Please, sign in again.</p>
        </>
      ) : (
        <>
          <Header />
          <MainContainer />
        </>
      ) }
    </>
  );
}