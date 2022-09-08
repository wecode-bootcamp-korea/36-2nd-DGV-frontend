import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import plusSign from '../../../assets/Mypage/plusSign.png';
import { API } from '../../../components/config/config.js';

function MypageMain() {
  const [movieList, setMovieList] = useState();
  const [isMovieExist, setIsMovieExist] = useState(false);

  useEffect(() => {
    fetch(`${API.movieChart}opening_date`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setMovieList(res.orderList);
        setIsMovieExist(true);
      });
  }, []);
  return (
    <div>
      <BookedMoviesHeader>
        <BmhTitle>My 예매내역</BmhTitle>
        <BmhNumbers>{movieList ? movieList.length : 0} 건</BmhNumbers>
        <BmhExpand to="bookedlist" />
        <BmhPhrase>
          예매번호로만 티켓을 찾을 수 있으니 반드시 확인 부탁드립니다.
        </BmhPhrase>
      </BookedMoviesHeader>

      {isMovieExist ? (
        <MovieListWrapper>
          {movieList &&
            movieList.map(({ id, thumbnail_image_url, title, date, time }) => {
              return (
                <MovieInfoWrap key={id}>
                  <Img src={thumbnail_image_url} />
                  <div>
                    <MovieTitle>{title}</MovieTitle>
                    <div>
                      {/* <ResDate>예매날짜: {date}</ResDate>
                      <ResTime>예매시간: {time}</ResTime> */}
                    </div>
                  </div>
                </MovieInfoWrap>
              );
            })}
        </MovieListWrapper>
      ) : (
        <MovieEmptyWrapper>
          <MovieListEmpty>
            <ListNotFound>
              고객님의 최근 예매내역이 확인되지 않습니다.
            </ListNotFound>
          </MovieListEmpty>
        </MovieEmptyWrapper>
      )}
    </div>
  );
}

export default MypageMain;

const BookedMoviesHeader = styled.div`
  display: flex;
  align-items: center;
`;

const BmhTitle = styled.h3`
  height: 34px;
  margin-right: 8px;
  color: #222;
  background-image: none;
  font-size: 17px;
  font-weight: 500;
  text-align: left;
  line-height: 34px;
`;

const BmhNumbers = styled.p`
  margin-right: 8px;
  font-size: 13px;
`;

const BmhExpand = styled(Link)`
  width: 20px;
  height: 20px;
  background-image: url(${plusSign});
  background-color: #9fa0a0;
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 2px;
`;

const BmhPhrase = styled.span`
  margin-left: 300px;
  color: #222;
  font-size: 13px;
`;

const MovieListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 810px;
  height: 440px;
  padding: 30px 70px;
  border: 1px solid black;
  overflow: scroll;
`;

const MovieEmptyWrapper = styled.div`
  width: 810px;
  height: 260px;
  padding: 30px 71px;
  border: 1px solid black;
`;

const MovieListEmpty = styled.div`
  width: 810px;
  height: 150px;
  padding: 30px 71px;
`;

const ListNotFound = styled.div`
  margin-top: 34px;
`;

const MovieInfoWrap = styled.div`
  width: 197px;
  margin-bottom: 30px;
  margin-right: 30px;

  &:nth-child(3n + 3) {
    margin-right: 0;
  }
`;

const Img = styled.img`
  width: 197px;
  height: 295.2px;
  border-radius: 5px;
`;

const MovieTitle = styled.span`
  display: block;
  margin: 5px 0;
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
`;

const ResDate = styled.p`
  color: #333333;
  font-size: 18px;
`;

const ResTime = styled.p`
  color: #333333;
  font-size: 18px;
`;
