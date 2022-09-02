import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import plusSign from '../../assets/Footer/Main/plusSign.svg';

function MovieChart() {
  const page = useLocation();

  return (
    <div className="MovieChart">
      <MovieChartWrapper>
        <ChartHeader>
          <ChartTitle>무비차트</ChartTitle>
          <ListTypeMenu>
            <OnMovieChart page={page.pathname} to="">
              <TriangleMovieChart
                page={page.pathname}
                src="https://img.icons8.com/emoji/48/000000/red-triangle-pointed-up-emoji.png"
              />
              무비차트
            </OnMovieChart>
            <OnComingSoonChart page={page.pathname} to="comingup">
              <TriangleComingSoon
                page={page.pathname}
                src="https://img.icons8.com/emoji/48/000000/red-triangle-pointed-up-emoji.png"
              />
              상영예정작
            </OnComingSoonChart>
          </ListTypeMenu>
        </ChartHeader>
        <div className="movieListWrapper">
          <Outlet />
        </div>
        <Pagination>
          <span>더보기</span>
          <ViewMore />
        </Pagination>
      </MovieChartWrapper>
    </div>
  );
}

export default MovieChart;

const MovieChartWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  border-bottom: 2px solid black;
`;

const ChartTitle = styled.div`
  color: #222;
  font-weight: 500;
  font-size: 36px;
  text-align: left;
`;

const TriangleMovieChart = styled.img`
  width: 10px;
  transform: rotate(90deg);
  padding-bottom: 2px;
  margin-right: 5px;
  visibility: ${({ page }) =>
    page === '/movieChart/moviechart' || page === '/movieChart'
      ? 'visible'
      : 'hidden'}; ;
`;

const TriangleComingSoon = styled.img`
  width: 10px;
  transform: rotate(90deg);
  padding-bottom: 2px;
  margin-right: 5px;
  visibility: ${({ page }) =>
    page === '/movieChart/comingup' ? 'visible' : 'hidden'}; ;
`;

const OnMovieChart = styled(Link)`
  color: ${({ page, theme }) =>
    page === '/movieChart/moviechart' || page === '/movieChart'
      ? theme.style.logoColor
      : 'black'};

  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const OnComingSoonChart = styled(Link)`
  color: ${({ page, theme }) =>
    page === '/movieChart/comingup' ? theme.style.logoColor : 'black'};

  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const ListTypeMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
`;

const ViewMore = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background-image: url(${plusSign});
  background-color: #9fa0a0;
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 2px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
