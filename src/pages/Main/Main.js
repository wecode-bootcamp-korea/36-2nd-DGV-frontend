import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';
import Carousel from './components/Carousel/Carousel';
import SideButton from './components/SideButton/SideButton';

function Main() {
  const [scroll, setScroll] = useState(0);

  const onScroll = e => {
    setScroll(e.currentTarget.scrollY);
  };

  window.addEventListener('scroll', onScroll);

  useEffect(() => {});
  return (
    <Container>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/embed/-ZtIOAb9Ypc"
        width="150vw"
        height="500px"
        playing={true}
        muted={true}
        loop={true}
      />

      {scroll >= 160 ? <SideButton opacity="1" /> : <SideButton opacity="0" />}
      <Carousel name="무비차트" />
      <Carousel name="상영예정작" />
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'center', 'center')}
  width: 100vw;
  background-color: rgba(232, 232, 232, 0.37);
`;

export default Main;
