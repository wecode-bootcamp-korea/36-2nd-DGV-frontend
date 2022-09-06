import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button/Button';
import Carousel from './components/carousel/Carousel';
import MovieContents from './components/MovieContents/MovieContents';
import { useParams } from 'react-router-dom';
import { API } from '../../config';
import Index from './components/Index/Index';

function Detail() {
  const [movieInfo, setMovieInfo] = useState({});
  const [getTitle, setGetTitle] = useState('');

  const params = useParams();

  useEffect(() => {
    fetch(`${API.detail}/${params.movieId}`)
      .then(response => response.json())
      .then(result => setMovieInfo(result));
  }, [params.movieId]);

  const imageSrc = movieInfo.images.Object.values();
  return (
    <Container>
      <InnerWrap>
        {movieInfo.map(item => {
          return (
            <MovieInfoWrap
              key={item.movieId}
              onLoad={() => {
                setGetTitle(item.title);
              }}
            >
              <Img src={item.thumbnail_image_url} />
              <MovieDetailWrap>
                <MovieTitle>
                  {item.title} <Age>15</Age>
                </MovieTitle>
                <MovieInfo>
                  <div>한국</div>
                  <div>{item.genre} (129분)</div>
                  <div> 개봉: {item.opening_date}</div>
                  <div>감독: 이석훈</div>
                  <div>배우: 현빈 , 유해진 , 임윤아, 다니엘헤니</div>
                </MovieInfo>
                <Button />
              </MovieDetailWrap>
            </MovieInfoWrap>
          );
        })}
        <Hr />
        <Index />
        <div id="1" />
        <Subtitle>영화 줄거리</Subtitle>
        <MovieContents title={getTitle} />
        <div id="2" />
        <Subtitle>스틸컷</Subtitle>
        <Carousel id={imageSrc} />
        <Yellowbg>
          <Ad src="/images/Detail/Ad.png" alt="ad" />
        </Yellowbg>
      </InnerWrap>
    </Container>
  );
}
const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  width: 100vw;
  background-color: white;
`;

const InnerWrap = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'center', 'center')}
  width: 980px;
  padding-top: 40px;
`;

const MovieInfoWrap = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'flex-start', 'center')}
  width: 980px;
`;

const Subtitle = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'flex-start', 'center')}
  height: 40px;
  width: 980px;
  font-size: 20px;
  font-weight: 700;
  background-color: #f6f6f6;
  color: #666666;
  padding: 10px;
  margin-top: 120px;
  margin-bottom: 40px;
`;

const MovieDetailWrap = styled.div`
  ${({ theme }) =>
    theme.variables.flex('column', 'space-evenly', 'flex-start')};
  margin-left: 25px;
  height: 260px;
`;
const Img = styled.img`
  width: 250px;
  height: 310px;
`;

const Yellowbg = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'center', 'center')};
  width: 100vw;
  background-color: #ffdf0c;
  height: 200px;
`;

const Ad = styled.img`
  width: 980px;
  height: 100%;
`;

const MovieTitle = styled.h1`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')};
  font-size: 30px;
  font-weight: 700;
`;
const Age = styled.span`
  font-size: 15px;
  border: 2px solid #fb4357;
  color: #fb4357;
  padding: 2px 3px;
  margin-left: 10px;
`;

const MovieInfo = styled.h1`
  ${({ theme }) =>
    theme.variables.flex('column', 'space-evenly', 'flex-start')};
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
  height: 45%;
`;

const Hr = styled.hr`
  border-top: 2px solid #cccccc;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 0px;
  width: 980px;
  margin-top: 90px;
  margin-bottom: 90px;
`;

export default Detail;
