import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  &::-webkit-scrollbar { 
    width: 0 !important;
  }
`;