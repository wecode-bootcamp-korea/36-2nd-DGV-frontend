import React from 'react';
import styled from 'styled-components';
import NavBottom from './NavBottom/NavBottom';
import NavTop from './NavTop/NavTop';

function NavMain() {
  return (
    <Container>
      <InnerWrap>
        <NavTop />
        <NavBottom />
      </InnerWrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  width: 100vw;
  border-bottom: 2px solid red;
  background-color: white;
  z-index: 10;
`;

const InnerWrap = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'center', 'center')}
  width: 980px;
`;
export default NavMain;
