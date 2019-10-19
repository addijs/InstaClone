import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  .list {
    width: 200px;
    height: 90vh;
    margin-right: 3px;
    padding: 10px;
    border: 2px solid rgba(0, 0, 0, .1);
    background-color: #fff;

    &>p {
      color: #a0a0a0;
    }

    .user {
      width: 95%;
      margin: 5px;
      padding: 10px;
      border: none;
      border-radius: 3px;
      background-color: #fff;
      cursor: pointer;
      transition: all .2s;
      display: flex;

      &:hover {
        background-color: #e0e0e0
      }
      .icon {
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 50%;
        background-color: green;
        align-self: center;
      }
    }
  }
`;