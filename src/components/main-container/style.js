import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 60px;

  .chatOpen {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .chatClosed {
    display: flex;
    justify-content: flex-end;
  }
`;