import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from './NavBottom/Dropdown/Dropdown';

function NavShort() {
  const [isShow, setIsShow] = useState('hide');
  const showList = () => {
    setIsShow('show');
  };
  const hideList = () => {
    setIsShow('hide');
  };

  return (
    <Container>
      <InnerDiv>
        <DropdownTitlelist
          align="end"
          onMouseEnter={showList}
          onMouseLeave={hideList}
        >
          <LogoLink to="/">
            <LogoImg src="https://img.cgv.co.kr/R2014/images/common/logo/logoWhite.png" />
            {LIST.map(item => {
              return <H1 key={item.id}>{item.list}</H1>;
            })}
          </LogoLink>
        </DropdownTitlelist>
        <SearchBoxDiv>
          <Input />
          <SearchImg src="images/Nav/whiteloupe.png" />
        </SearchBoxDiv>
      </InnerDiv>
      <Dropdown
        isShow={isShow}
        onMouseEnter={showList}
        onMouseLeave={hideList}
        top="100%"
      />
    </Container>
  );
}

const LIST = [
  { id: 1, list: ' 영화 ' },
  { id: 2, list: ' 극장 ' },
  { id: 3, list: ' 예매 ' },
  { id: 4, list: ' 스토어 ' },
  { id: 5, list: ' 이벤트 ' },
  { id: 6, list: ' 혜택 ' },
];

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  width: 100vw;
  height: 60px;
  background-image: linear-gradient(
    to right,
    rgb(215, 67, 87),
    rgb(241, 79, 58) 59%,
    rgb(239, 100, 47)
  );
  position: fixed;
  top: 0px;
`;

const LogoLink = styled(Link)`
  ${({ theme }) => theme.variables.flex('row', '', 'end')}
  text-decoration: none;

  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;
const InnerDiv = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')}
  width: 980px;
  height: 53px;
`;

const DropdownTitlelist = styled.div`
  ${({ theme }) => theme.variables.flex('row', '', 'center')}
`;

const SearchBoxDiv = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'flex-end')}
  position: relative;
`;

const LogoImg = styled.img`
  width: 74px;
  height: 34px;
  margin-right: 20px;
`;
const H1 = styled.h1`
  letter-spacing: 0.313em;
  line-height: 1.5em;
  font-weight: 700;
  font-size: 16px;
  padding-right: 35px;
  color: white;
`;

const Input = styled.input`
  background-color: inherit;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 1px solid #cacaca;
  border-right: 1px solid #cacaca;
  width: 280px;
  height: 30px;
  &:focus {
    outline: none;
  }
`;

const SearchImg = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 20px;
  top: 0.5px;
`;

export default NavShort;
