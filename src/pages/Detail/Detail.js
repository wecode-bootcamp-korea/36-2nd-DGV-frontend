import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button/Button';
import Carousel from './carousel/Carousel';
import MovieContents from './MovieContents/MovieContents';
import Index from './Index/Index';

function Detail() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [getTitle, setGetTitle] = useState('');
  const [getActor, setGetActor] = useState('');
  const [getDir, setGetDir] = useState('');

  useEffect(() => {
    fetch('/data/Movie.json')
      .then(response => response.json())
      .then(result => setMovieInfo(result));
  }, []);
  return (
    <Container>
      <InnerWrap>
        {movieInfo.map(item => {
          return (
            <MovieInfoWrap
              key={item.id}
              onLoad={() => {
                setGetTitle(item.title);
                setGetActor(item.actor);
                setGetDir(item.dir);
              }}
            >
              <Img src={item.url} />
              <MovieDetailWrap>
                <MovieTitle>
                  {item.title} <Age>{item.age}</Age>
                </MovieTitle>
                <MovieInfo>
                  <div>{item.country}</div>
                  <div>{item.genre} (129분)</div>
                  <div> 개봉: {item.date}</div>
                  <div>감독: {item.dir}</div>
                  <div>배우: {item.actor}</div>
                </MovieInfo>
                <Button />
              </MovieDetailWrap>
            </MovieInfoWrap>
          );
        })}
        <Hr />
        <Index />
        <Subtitle id="1">영화 줄거리</Subtitle>
        <MovieContents title={getTitle} actor={getActor} dir={getDir} />;
        <Subtitle id="2">스틸컷</Subtitle>
        <Carousel />
        <Ad src="/images/Detail/Ad.png" />
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
  margin-top: 100px;
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

const Ad = styled.img`
  width: 100%;
  height: 200px;
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
