import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  
  .login-form {
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input, button {
      font-family: 'Roboto', sans-serif;
    }
    
    input {
      font-size: 20px;
      width: 250px;
      height: 50px;
      padding: 10px;
      margin-bottom: 30px;
      border: 1px solid rgba(0, 0, 0, .1);
      box-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
    }

    button {
      width: 100px;
      height: 40px;
      border: 1px solid #e9e9e9;
      border-radius: 10px;
      background-color: #c9c9c9;
      transition: all 0.1s;
      cursor: pointer;

      &:hover {
        background-color: #515151;
        color: #e5e5e5;
      }
    }
  }
`;