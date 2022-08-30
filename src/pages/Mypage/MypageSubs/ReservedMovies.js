import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../components/config/config.js';

function ReservedMovies() {
  const [movieList, setMovieList] = useState();
  const [isMovieExist, setIsMovieExist] = useState(false);

  useEffect(() => {
    fetch(`${API.movieChart}?orderBase=opening_date`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setMovieList(res);
        setIsMovieExist(true);
      });
  }, []);
  return (
    <div>
      <div>
        <ResMovHeader>
          <HeaderTitle>나의 예매내역</HeaderTitle>
          <Description>
            지난 1개월까지의 예매내역을 확인하실 수 있으며, 영수증은 신용카드
            결제 내역만 출력 가능합니다.
          </Description>
        </ResMovHeader>
      </div>
      <ReservedList>
        {isMovieExist ? (
          movieList.map(({ id, img, title, date, time }) => {
            return (
              <MovieInfoWrap key={id}>
                <Img src={img} />
                <div>
                  <MovieTitle>{title}</MovieTitle>
                  <div>
                    <div>예매날짜: {date}</div>
                    <div>예매시간: {time}</div>
                  </div>
                </div>
              </MovieInfoWrap>
            );
          })
        ) : (
          <>
            <Instruction>
              현장에서 발권하실 경우 꼭 예매번호를 확인하세요.
            </Instruction>
            <SubInstruction>
              티켓판매기에서 예매번호를 입력하면 티켓을 발급받을 수 있습니다.
            </SubInstruction>
            <Notification>
              고객님의 최근 예매내역이 존재하지 않습니다.
            </Notification>
          </>
        )}
      </ReservedList>
    </div>
  );
}

export default ReservedMovies;

const ResMovHeader = styled.div`
  padding-bottom: 8px;
  border-bottom: 2px solid #222;
`;

const HeaderTitle = styled.div`
  height: 34px;
  margin: 0;
  color: #222;
  background-image: none;
  font-size: 17px;
  font-weight: 500;
  line-height: 34px;
  text-align: left;
`;

const Description = styled.div`
  margin-left: 0;
  font-size: 13px;
  text-align: left;
  line-height: 1;
  clear: both;
`;

const ReservedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 810px;
  padding: 30px 0;
  text-align: center;
`;

const Instruction = styled.div`
  margin: 20px 0 5px;
  color: #222;
  font-size: 24px;
`;

const SubInstruction = styled.div`
  color: #666666;
  font-size: 13px;
`;

const Notification = styled.div`
  width: 740px;
  padding: 30px;
  color: #666666;
  border-bottom: 1px solid #d6d4ca;
  font-size: 13px;
`;

const MovieInfoWrap = styled.div`
  width: 197px;
  margin-left: 64px;
  margin-bottom: 30px;

  &:nth-child(3n + 3) {
    margin-right: 0;
  }
`;

const Img = styled.img`
  width: 197px;
`;

const MovieTitle = styled.span`
  display: block;
  color: #333333;
  white-space: nowrap;
`;
