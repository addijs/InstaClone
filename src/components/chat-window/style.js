import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    display: flex;

    img {
      width: 20px;
      border-radius: 50%;
      margin-right: 10px;
    }

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
      justify-self: flex-end;
    }
  }

  .container {
    height: 80%;
    display: flex;
    background-color: #d9d9d9;
    border: 1px solid rgba(0, 0, 0, .1);


    .messages {
      width: 100%;
      height: 100%;
      overflow: auto;
      display: flex;
      align-self: flex-end;
      flex-direction: column;

      .loggedUser {
        align-self: flex-end;
      }

      .chatUser {
        align-self: flex-start;
      }

      .loggedUser, .chatUser, &>p {
        min-width: 100px;
        margin: 5px;
        padding: 5px 10px;
        background-color: #fff;
        border-radius: 5px;
        
        strong {
          margin-bottom: 2px;
        }
      }
    }

  }

  .footer {
    padding: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;

    input {
      font-family: 'Roboto', sans-serif;
      width: 80%;
      background-color: #f9f9f9;
      border: 1px solid rgba(10, 10, 10, .1);
    }

    button {
      align-self: center;
      border: none;
      background-color: #fff;
      margin-right: 5px;
      cursor: pointer;

      .send-icon {
        color: #808080;
      }
    }
  }
`;