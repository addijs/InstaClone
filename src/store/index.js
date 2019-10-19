import { createStore } from 'redux';

const INITIAL_STATE = {
  users: [],
  connectedSocket: null,
  chat: {
    chatUser: null,
    showChatWindow: false
  }
}

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_USERS':
      return { ...state, users: action.usersArray };
    case 'SET_CONNECTED_SOCKET':
      return { ...state, connectedSocket: action.socket };
    case 'SET_CHAT_USER':
      return { ...state, chat: { chatUser: action.user, showChatWindow: true } }
    case 'CLOSE_CHAT_WINDOW':
      return { ...state, chat: { chatUser: action.user, showChatWindow: false } }
    default:
      return state;
  }
}

export const store = createStore(reducer);