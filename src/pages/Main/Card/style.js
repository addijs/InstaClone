import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 0;
  margin-bottom: 30px;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${({ measurements }) => measurements};
  height: ${({ measurements }) => measurements};
  margin-right: 10px;
  border-radius: ${({ measurements }) => measurements * 0.5};
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Footer = styled.View`
  margin-top: 5px;
  padding: 0 10px;
`;

export const Description = styled.View`
  padding-top: 10px;
`;
