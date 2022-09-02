import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styled from 'styled-components';
import { API } from '../../../components/config/config.js';

function MovieList() {
  const [movieInfo, setMovieInfo] = useState([]);
  const navigate = useNavigate();

  const toMovieDetail = movieId => {
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    fetch(`${API.movieChart}rating_week`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setMovieInfo(result.listByRating));
  }, []);
  return (
    <div className="movieList">
      <MovieCard>
        {movieInfo.map(({ id, img, title, eng_title, description }) => {
          return (
            <MovieInfoWrap key={id} onClick={() => toMovieDetail(id)}>
              <Img src={img} onClick={() => toMovieDetail(id)} />
              <div className="movieDetailWrap">
                <MovieTitle onClick={() => toMovieDetail(id)}>
                  {title}
                </MovieTitle>
                <div className="movieInfo">
                  <MovieEngTitle onClick={() => toMovieDetail(id)}>
                    {eng_title}
                  </MovieEngTitle>
                  <MovieGenre onClick={() => toMovieDetail(id)}>
                    {description}
                  </MovieGenre>
                </div>
                <Button />
              </div>
            </MovieInfoWrap>
          );
        })}
      </MovieCard>
    </div>
  );
}

export default MovieList;

const MovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const MovieInfoWrap = styled.div`
  width: 197px;
  margin-left: 64px;
  margin-bottom: 30px;

  &:nth-child(4n + 1) {
    margin-left: 0 !important;
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

const MovieEngTitle = styled.span`
  color: #333333;
  font-size: 11px;
  white-space: nowrap;
`;

const MovieGenre = styled.span`
  color: #333333;
  font-size: 11px;
  white-space: nowrap;
`;
