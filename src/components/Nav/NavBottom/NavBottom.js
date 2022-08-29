import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown/Dropdown';

function NavBottom() {
  const [isShow, setIsShow] = useState('hide');
  const showList = () => {
    setIsShow('show');
  };
  const hideList = () => {
    setIsShow('hide');
  };

  return (
    <Container>
      <InnerWrap width="980px" border="red" height="53px">
        <DropdownTitlelist onMouseEnter={showList} onMouseLeave={hideList}>
          {LIST.map(item => {
            return <DropdownTitle key={item.id}>{item.list}</DropdownTitle>;
          })}
        </DropdownTitlelist>
        <SearchBox>
          <Input />
          <SearchIcon src="images/Nav/loupe.png" />
        </SearchBox>
      </InnerWrap>
      <Dropdown
        isShow={isShow}
        onMouseEnter={showList}
        onMouseLeave={hideList}
        top="104%"
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
  height: 50px;
  position: relative;
`;

const InnerWrap = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')}
  height: 53px;
  width: 980px;
`;

const DropdownTitlelist = styled.div`
  ${({ theme }) => theme.variables.flex('row', '', 'flex-end')}
`;

const DropdownTitle = styled.h1`
  letter-spacing: 0.313em;
  line-height: 1.5em;
  font-size: 16px;
  font-weight: 500;
  padding-right: 35px;
  color: #222;
  cursor: Pointer;
`;

const SearchBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'flex-end')}
  position: relative;
`;

const Input = styled.input`
  width: 250px;
  height: 25px;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 1px solid #cacaca;
  border-right: 1px solid #cacaca;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 20px;
  top: 0.5px;
`;
export default NavBottom;
