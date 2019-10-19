import { createStore } from 'redux';

const INITIAL_STATE = {
  users: [],
  connectedSocket: null,
  chatUser: null
}

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_USERS':
      return { ...state, users: action.usersArray };
    case 'SET_CONNECTED_SOCKET':
      return { ...state, connectedSocket: action.socket };
    case 'SET_CHAT_USER':
      return { ...state, chatUser: action.user }
    default:
      return state;
  }
}

export const store = createStore(reducer);