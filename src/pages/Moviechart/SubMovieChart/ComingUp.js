import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styled from 'styled-components';
import { API } from '../../../components/config/config.js';

function MovieList() {
  const [movieInfo, setMovieInfo] = useState([]);
  const navigate = useNavigate();
  let movieId = '';
  const toMovieDetail = id => {
    movieId = id;
    navigate(`/detail/${movieId}`);
  };

  useEffect(() => {
    fetch(`${API.movieChart}opening_date`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setMovieInfo(result.orderList));
  }, []);
  return (
    <div className="movieList">
      <MovieCard>
        {movieInfo.map(
          ({ id, thumbnail_image_url, title, eng_title, description }) => {
            return (
              <MovieInfoWrap key={id} onClick={() => toMovieDetail(id)}>
                <Img
                  src={thumbnail_image_url}
                  onClick={() => toMovieDetail(id)}
                />
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
          }
        )}
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
  height: 295.5px;
  margin-bottom: 5px;
`;

const MovieTitle = styled.span`
  display: block;
  margin-bottom: 5px;
  color: #333333;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
`;

const MovieEngTitle = styled.span`
  margin-right: 10px;
  color: #333333;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;

const MovieGenre = styled.span`
  color: #333333;
  font-size: 16px;
  white-space: nowrap;
`;
