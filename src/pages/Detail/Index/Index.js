import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll/modules';

const Index = props => {
  return (
    <MiddleBlock>
      <Link to="1">
        <h2 smooth="true" duration={2000}>
          영화 줄거리
        </h2>
      </Link>
      <div>
        <h2>|</h2>
      </div>
      <Link to="2" smooth="true" duration={500}>
        <h2>스틸컷</h2>
      </Link>
    </MiddleBlock>
  );
};

const MiddleBlock = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-evenly', 'center')};
  margin-bottom: 80px;
  background-color: #ff4a57;
  color: white;
  width: 300px;
  padding: 15px;
  font-size: 18px;
  font-weight: 800;
  border-radius: 15px;
`;

export default Index;
