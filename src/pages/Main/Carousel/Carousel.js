import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ name }) {
  const [movieChart, setMovieChart] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch('/data/movieChart.json')
      .then(response => response.json())
      .then(result => setMovieChart(result));
  }, []);
  useEffect(() => {
    fetch('/data/movieList.json')
      .then(response => response.json())
      .then(result => setMovieList(result));
  }, []);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    cssEase: 'linear',
  };
  return (
    <Container>
      <InnerWrap>
        <WrapTitle>
          <H1>{name}</H1>
          <ShowMovieChart>
            <StyleLink to="/detail">
              전체보기 <Icon src="/images/Main/next.png" alt="showall" />
            </StyleLink>
          </ShowMovieChart>
        </WrapTitle>
        <Slider {...settings}>
          {name === '무비차트'
            ? movieChart.map(item => {
                return (
                  <MovieInfoWrap key={item.id}>
                    <Img src={item.img} alt={item.title} />
                    <Movietitle>{item.title}</Movietitle>
                    <Rank>{item.id}</Rank>
                  </MovieInfoWrap>
                );
              })
            : name === '상영예정작'
            ? movieList.map(item => {
                return (
                  <MovieInfoWrap key={item.id}>
                    <Img src={item.img} alt={item.title} />
                    <Movietitle>{item.title}</Movietitle>
                  </MovieInfoWrap>
                );
              })
            : null}
        </Slider>
      </InnerWrap>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')};
  width: 100vw;
  height: 480px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(232, 232, 232, 0.37)
  );
`;

const WrapTitle = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')};
  margin-bottom: 20px;
`;

const Rank = styled.h1`
  line-height: 1.5em;
  font-weight: 700;
  font-size: 55px;
  font-style: italic;
  color: white;
  position: absolute;
  top: 175px;
`;

const InnerWrap = styled.div`
  width: 980px;

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 40px;
    height: 40px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 60px;
    line-height: 0.5;
    opacity: 0.65;
    color: rgba(255 99 71/80%);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -45px;
    z-index: 5;
  }
  [dir='rtl'] .slick-prev {
    right: -25px;
    z-index: 5;
    left: auto;
  }
  .slick-prev:before {
    content: '←';
  }
  [dir='rtl'] .slick-prev:before {
    content: '→';
  }

  .slick-next {
    right: -0px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: '→';
  }
  [dir='rtl'] .slick-next:before {
    content: '←';
  }
`;

const MovieInfoWrap = styled.div`
  text-align: center;
  position: relative;
`;
const ShowMovieChart = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  width: 130px;
  min-height: 45px;
  box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 10%);
  border-radius: 25px;
  font-size: 17px;
  font-weight: 500;
  color: black;
`;
const Img = styled.img`
  width: 170px;
  height: 234px;
  border-radius: 15px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 30px;
`;

const H1 = styled.h1`
  line-height: 1.5em;
  font-weight: 700;
  margin-bottom: 14px;
  font-size: 30px;
  color: #222;
`;
const Movietitle = styled.h1`
  line-height: 1.5em;
  font-weight: 700;
  font-size: 18px;
  color: #222;
  margin-top: 14px;
  margin-right: 25px;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  &:visited,
  &:hover &:active {
    color: inherit;
  }
`;

export default Carousel;
