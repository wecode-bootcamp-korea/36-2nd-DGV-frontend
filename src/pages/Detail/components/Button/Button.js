import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Button() {
  return (
    <StyleLink to="/booking">
      {' '}
      <Container>예매하기</Container>
    </StyleLink>
  );
}
const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  width: 150px;
  height: 38px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff4a57;
  border-radius: 10px;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;
export default Button;
