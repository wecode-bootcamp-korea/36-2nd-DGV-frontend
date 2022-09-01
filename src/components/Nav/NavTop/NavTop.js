import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavTop() {
  return (
    <Container>
      <InnerWrap>
        <LogoDiv>
          <LogoLink to="/">
            <Img src="/images/Nav/dgv-red5.png" width="117px" height="53px" />
            <H1>DaGreatFive</H1>
          </LogoLink>
        </LogoDiv>
        <UserMapDiv>
          {LIST.map(item => {
            return (
              <StyleLink to={item.goto} key={item.id}>
                <Img src={item.url} width="33px" height="33px" />
                <span>{item.title}</span>
              </StyleLink>
            );
          })}
        </UserMapDiv>
      </InnerWrap>
    </Container>
  );
}

const LIST = [
  { id: 1, url: ' /images/Nav/login.png ', title: '로그인', goto: '/login' },
  { id: 2, url: ' /images/Nav/signin.png ', title: '회원가입', goto: '/' },
  { id: 3, url: ' /images/Nav/MyCGV.png ', title: 'My CGV', goto: '/mypage' },
  { id: 4, url: ' /images/Nav/help.png ', title: '고객센터', goto: '/' },
];

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  width: 100vw;
  border-bottom: 1px solid #eeeeee;
  height: 113px;
`;

const InnerWrap = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')}
  width: 980px;
`;
const LogoDiv = styled.div`
  ${({ theme }) => theme.variables.flex('row', '', 'end')}
`;
const UserMapDiv = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'flex-end')}
`;

const Img = styled.img`
  cursor: Pointer;
  width: ${props => props.width};
  height: ${props => props.height};
`;

const H1 = styled.h1`
  letter-spacing: 0.313em;
  line-height: 1.5em;
  font-weight: 300;
  font-size: 16px;
  color: #222;
`;

const StyleLink = styled(Link)`
  width: 43px;
  text-decoration: none;
  margin-left: 44px;
  font-size: 12px;
  text-align: center;
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
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

export default NavTop;
