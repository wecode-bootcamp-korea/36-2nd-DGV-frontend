import React from 'react';
import { useState } from 'react';
import NavMain from './NavMain';
import NavShort from './NavShort';

function Nav() {
  const [scroll, setScroll] = useState(0);
  const onScroll = e => {
    setScroll(e.currentTarget.scrollY);
  };

  window.addEventListener('scroll', onScroll);

  return (
    <div>
      <NavMain />
      {scroll >= 160 && <NavShort />}
    </div>
  );
}
export default Nav;
