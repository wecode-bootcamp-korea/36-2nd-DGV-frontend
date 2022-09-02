import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Button() {
  return (
    <Container>
      <StyleLink to="/booking">예매하기</StyleLink>
    </Container>
  );
}
const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  width: 97px;
  height: 25px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff4a57;
  border-radius: 10px;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;
export default Button;
