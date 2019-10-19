import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'; 

export const Container = styled.View`
  padding: 10px;
  margin-bottom: 5px;
  align-self: ${props => 
    props.user.data.from !== props.user.chatUser ? 'flex-end' : 'flex-start'
  };
  background-color: ${props => 
    props.user.data.from !== props.user.chatUser ? '#efefef' : '#fff'
  };
  border-width: 1px;
  border-color: ${props => 
    props.user.data.from !== props.user.chatUser ? 'transparent' : '#ddd'
  };
  border-radius: 10px;
  border-top-left-radius: ${props => 
    props.user.data.from !== props.user.chatUser ? '10px' : '0px'
  };

border-top-right-radius: ${props => 
    props.user.data.from !== props.user.chatUser ? '0px' : '10px'
  };
`;

// export const UserText = styled.Text`
//   font-size: 20px;
//   color: #333;
// `;

export const MessageText = styled.Text`
  font-size: 18px;
  color: #555;
`;