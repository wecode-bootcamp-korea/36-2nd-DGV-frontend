import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ id }) {
  const [movieInfo, setMovieInfo] = useState([]);

  // useEffect(() => {
  //   fetch(`http://10.58.4.124:3000/movie/${id}`)
  //     .then(response => response.json())
  //     .then(result => setMovieInfo(result));
  // }, [id]);

  useEffect(() => {
    fetch('/data/test.json')
      .then(response => response.json())
      .then(result => setMovieInfo(result));
  }, []);

  let settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'ease',
    className: 'center',
    centerMode: true,
  };
  return (
    <Container>
      <InnerWrap {...settings}>
        {movieInfo.map(({ images }) => {
          return Object.values(images).map((item, index) => {
            return <Img src={item} key={index} alt="title" />;
          });
        })}
      </InnerWrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  width: 100vw;
  margin-bottom: 600px;
`;

const InnerWrap = styled(Slider)`
  width: 980px;
  text-align: center;

  .slider {
    width: 600px;
    margin: 20px auto;
    text-align: center;
    padding: 20px;
    color: white;

    .slide {
      padding: 0;
      .child-element {
        transition: all 0.2s ease;
        background: red;
        width: 100%;
        height: 80px;
        margin: 30px 0;
        transition: all 0.5s;
      }
    }
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 10px;
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

const Img = styled.img`
  height: 500px;

  border-radius: 15px;
`;

export default Carousel;
