import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  margin: 20px 0 40px;

  h3 {
    margin-bottom: 10px;
  }

  .container {
    label#thumb {
      height: 150px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-size: cover;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;  
    }

    label.has-image {
      border: 0;

      svg {
        display: none;
      }
    }

    input {
      display: none;
    }
  }

  .inputs {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    input {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ddd;
    }

    button {
      width: 100px;
      border: none;
      color: #fff;
      background-color: #999;
      border-radius: 2px;
      cursor: pointer;
      transition: all .1s;

      &:hover {
        background-color: #555;
      }
    }
  }
  
`;