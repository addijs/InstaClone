import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    width: 20%;
    height: 30px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 3px;
  }

  div.buttons {
    width: 10%;

    display: flex;
    justify-content: space-around;

    button {
      border: none;
      background: none;
      .chat-icon, .person-icon {
        color: #a0a0a0;
        cursor: pointer;
      }
      .chat-icon:hover, .person-icon:hover {
        color: #515151;
        transform: translateY(-2px);
        transition: all 0.2s;
      }
    }
  }
`;