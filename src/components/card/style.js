import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  min-width: 550px;
  margin-bottom: 30px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 5px;
  
  div.img {
    width: 100%;
    height: 300px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .header {
    padding: 10px;
    display: flex;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }

  .footer {
    margin-top: 5px;
    padding: 0 10px;

    p {
      margin-bottom: 8px;
    }

    .icons {
      width: 15%;
      margin-bottom: 10px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .like, .comment {
        color: #8f8f8f;
        cursor: pointer;
      }

      .like:hover, .comment:hover {
        color: #515151;
        transition: color 0.2s;
      }
    }
  }
  
`;