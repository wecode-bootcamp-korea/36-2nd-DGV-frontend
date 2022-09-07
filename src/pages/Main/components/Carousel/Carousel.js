import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { API } from '../../../../config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LinktoButton from '../LinktoButton/LinktoButton';

function Carousel({ name }) {
  const [movieByRating, setMovieByRating] = useState([]);
  const [movieByOpening, setMovieByOpening] = useState([]);
  const [isShow, setIsShow] = useState(0);

  useEffect(() => {
    fetch(`${API.chart}?orderBase=opening_date`)
      .then(response => response.json())
      .then(result => {
        setMovieByRating(result.orderList);
      });
  }, []);

  useEffect(() => {
    fetch(`${API}?orderBase=rating_week`)
      .then(response => response.json())
      .then(result => setMovieByOpening(result.orderList));
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
              <span> 전체보기</span>{' '}
              <Icon src="/images/Main/next.png" alt="showall" />
            </StyleLink>
          </ShowMovieChart>
        </WrapTitle>
        <Slider {...settings}>
          {name === '무비차트'
            ? movieByRating.map(item => {
                return (
                  <MovieInfoWrap key={item.id}>
                    <HoverDiv
                      onMouseEnter={() => setIsShow(item.id)}
                      onMouseLeave={() => setIsShow(0)}
                    >
                      {isShow === item.id && <LinktoButton id={isShow} />}
                      <Img src={item.thumbnail_image_url} alt={item.title} />
                    </HoverDiv>
                    <Movietitle>{item.title}</Movietitle>
                    <Rank>{item.id}</Rank>
                  </MovieInfoWrap>
                );
              })
            : name === '상영예정작'
            ? movieByOpening.map(item => {
                return (
                  <MovieInfoWrap key={item.id}>
                    <HoverDiv
                      onMouseEnter={() => setIsShow(item.id)}
                      onMouseLeave={() => setIsShow(0)}
                    >
                      {isShow === item.id && <LinktoButton id={isShow} />}
                      <Img src={item.thumbnail_image_url} alt={item.title} />
                    </HoverDiv>
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
  *:focus {
    outline: 0;
    outline: none;
  }

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
  width: 140px;
  min-height: 45px;
  box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 10%);
  border-radius: 25px;
  font-size: 17px;
  font-weight: 500;
  padding-left: 15px;
  color: black;
`;
const Img = styled.img`
  width: 175px;
  height: 234px;
  border-radius: 15px;
`;

const HoverDiv = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'center', 'center')}
  width: 175px;
  height: 234px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &:hover::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.09) 35%,
      rgba(0, 0, 0, 0.85)
    );
    z-index: 2;
  }
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
  ${props => props.theme.variables.flex('row', 'space-between', 'center')};
  text-decoration: none;
  &:visited,
  &:hover &:active {
    color: inherit;
    outline: none;
  }
`;

export default Carousel;
