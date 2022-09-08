import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Dropdown({ isShow, onMouseLeave, onMouseEnter, top }) {
  return (
    <Container
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      top={top}
      isShow={isShow}
    >
      <InnerDiv>
        <Ul>
          <H1 fontWeight="800">영화</H1>
          {MOVIE.map(item => {
            return (
              <StyleLink to={item.url} key={item.id}>
                <li>{item.list}</li>
              </StyleLink>
            );
          })}
        </Ul>
        <Ul direction="column">
          <H1 fontWeight="800">극장</H1>
          {THEATER.map(item => {
            return <li key={item.id}>{item.list}</li>;
          })}
        </Ul>
        <Ul direction="column">
          <H1 fontWeight="800">예매</H1>
          {BOOK.map(item => {
            return (
              <StyleLink to={item.url} key={item.id}>
                <li>{item.list}</li>
              </StyleLink>
            );
          })}
        </Ul>
        <Ul direction="column">
          <H1 fontWeight="800">스토어</H1>
          {STORE.map(item => {
            return <li key={item.id}>{item.list}</li>;
          })}
        </Ul>
        <Ul direction="column">
          <H1 fontWeight="800">이벤트</H1>
          {EVENT.map(item => {
            return <li key={item.id}>{item.list}</li>;
          })}
        </Ul>
        <Ul direction="column">
          <H1 fontWeight="800">혜택</H1>
          {BENEFIT.map(item => {
            return <li key={item.id}>{item.list}</li>;
          })}
        </Ul>
      </InnerDiv>
    </Container>
  );
}

const MOVIE = [
  { id: 1, list: ' 무비차트 ', url: '/moviechart' },
  { id: 2, list: ' 아트하우스 ', url: '/' },
  { id: 3, list: ' ICECON ', url: '/' },
];
const THEATER = [
  { id: 1, list: ' CGV 극장 ' },
  { id: 2, list: ' 특별관 ' },
];
const BOOK = [
  { id: 1, list: ' 빠른예매 ', url: '/booking' },
  { id: 2, list: ' 상영스케줄 ', url: '/' },
  { id: 3, list: ' English Ticketing ', url: '/' },
  { id: 4, list: ' English Schedule ', url: '/' },
];
const STORE = [
  { id: 1, list: ' 영화관람권 ' },
  { id: 2, list: ' 기프트카드 ' },
  { id: 3, list: ' 콤보 ' },
  { id: 4, list: ' 팝콘 ' },
  { id: 5, list: ' 음료 ' },
  { id: 6, list: ' 스낵 ' },
  { id: 7, list: ' 플레이존 ' },
];
const EVENT = [
  { id: 1, list: ' SPECIAL ' },
  { id: 2, list: ' 영화/예매 ' },
  { id: 3, list: ' 멤버십/CLUB ' },
  { id: 4, list: ' CGV 극장별 ' },
  { id: 5, list: ' 제휴할인 ' },
  { id: 6, list: ' 당첨자 발표 ' },
  { id: 7, list: ' 종료된 이벤트 ' },
];
const BENEFIT = [
  { id: 1, list: ' CGV 할인정보 ' },
  { id: 2, list: ' CLUB 서비스 ' },
  { id: 3, list: ' VIP 라운지 ' },
];

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  top: ${props => props.top};
  height: ${props => (props.isShow === 'show' ? '300px' : '0px')};
  overflow: hidden;
  width: 100vw;
  background-color: white;
  transition: height ease-out 0.4s 0s;
  position: absolute;
  z-index: 1000;
`;
const InnerDiv = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'flex-start')}
  width: 980px;
`;

const Ul = styled.ul`
  ${({ theme }) => theme.variables.flex('column', '', '')}
  line-height: 2;
  margin: 15px 0px;
`;

const H1 = styled.h1`
  letter-spacing: 0.313em;
  line-height: 1.5em;
  cursor: Pointer;
  font-weight: 800;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;
export default Dropdown;
