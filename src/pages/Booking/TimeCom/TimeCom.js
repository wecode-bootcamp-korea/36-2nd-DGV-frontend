import { useEffect, useState } from 'react';
import styled from 'styled-components';

function TimeCom({
  activeTime,
  setActiveTime,
  date,
  getMovieId,
  activeLocation,
}) {
  const [info, setInfo] = useState('');
  // useEffect(() => {
  //   fetch('/data/date.json')
  //     .then(response => response.json())
  //     .then(result => setInfo(result));
  // }, []);

  useEffect(() => {
    fetch(
      `http://10.58.2.182:3000/movies/idandsublocation?movieId=${getMovieId}&subLocationName="${activeLocation}"`
    )
      .then(response => response.json())
      .then(result => setInfo(result));
  }, [getMovieId, activeLocation]);

  return (
    <Time>
      <Title>시간</Title>
      <Content>
        <TimeDiscount>
          <Img src="/images/booking/sun.png" alt="sun" />
          조조 <Img src="/images/booking/moon.png" alt="moon" />
          심야
        </TimeDiscount>
        <MovieTimeContainer>
          {info.timeList &&
            info.timeList.map(
              item =>
                item.date === date && (
                  <MovieRow key={item.time}>
                    <MoviePlace>
                      {item.auditorium} <Seats>&nbsp;(총{item.seats}석)</Seats>
                    </MoviePlace>
                    <MovieTimeWrapper>
                      {item.time.map(index => (
                        <MovieTime
                          key={index}
                          activeTime={activeTime === index}
                          onClick={() => {
                            setActiveTime(index);
                          }}
                        >
                          {index}
                        </MovieTime>
                      ))}
                    </MovieTimeWrapper>
                  </MovieRow>
                )
            )}
        </MovieTimeContainer>
      </Content>
    </Time>
  );
}

const Time = styled.div`
  width: 100%;
`;

const Title = styled.div`
  height: 2.2rem;
  padding: 0.7rem 0;
  border: 0.5px solid wheat;
  border-top: none;
  background-color: #333333;
  color: #f2f0e5;
  text-align: center;
`;

const Content = styled.div`
  height: 18.3rem;
  padding: 1.4rem;
  border: 0.5px solid rgb(0 0 0 /20%);
  background-color: #f2f0e5;
  overflow: scroll;
`;

const TimeDiscount = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid rgb(0 0 0 /20%);
  font-size: 0.9rem;
`;

const Img = styled.img`
  width: 1rem;
  margin-right: 0.3rem;
`;

const MovieTimeContainer = styled.div`
  ${({ theme }) =>
    theme.variables.flex('column', 'space-between', 'space-between')}
  width: 18rem;
`;

const MovieTime = styled.span`
  border: 1px solid rgb(0 0 0 /20%);
  padding: 0.3rem;
  font-weight: 700;
  margin: 0.5rem 2.3rem 0 0;
  cursor: pointer;

  ${({ activeTime }) =>
    activeTime &&
    `background-color: black;
  color: white;
  `};
`;

const MovieRow = styled.div`
  width: 100%;
  padding: 0.5rem;
`;

const MoviePlace = styled.div`
  display: flex;
  font-weight: 700;
  color: #b44d15;
  font-size: 0.9rem;
  margin-bottom: 0;
`;

const MovieTimeWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'flex-start', 'space-between')}
  width: 100%;
  flex-wrap: wrap;
`;

const Seats = styled.div`
  color: green;
  font-weight: 100;
  font-size: 0.8rem;
`;

export default TimeCom;
