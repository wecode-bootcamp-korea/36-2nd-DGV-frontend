import React from 'react';
import styled from 'styled-components';
function Main() {
  return (
    <Container>
      <iframe
        width="100%"
        height="534"
        src="https://www.youtube.com/embed/9qQuoqpw7KA?autoplay=1&mute=1&controls=0"
        title="[블랙 아담] 티저 예고편"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;
  background-color: rgba(232, 232, 232, 0.37);
`;

export default Main;
