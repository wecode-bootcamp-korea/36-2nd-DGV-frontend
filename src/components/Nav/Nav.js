import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import NavMain from './NavMain';
import NavShort from './NavShort';

function Nav() {
  const [scroll, setScroll] = useState(0);
  const onScroll = e => {
    setScroll(e.currentTarget.scrollY);
  };

  window.addEventListener('scroll', onScroll);

  return (
    <Container>
      <NavMain />
      {scroll >= 160 && <NavShort />}
    </Container>
  );
}

const Container = styled.div`
  z-index: 1000;
`;

export default Nav;
