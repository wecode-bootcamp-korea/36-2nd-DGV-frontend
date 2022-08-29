import { useState, useEffect } from 'react';
import MovieCom from './MovieCom/MovieCom';
import TheatreCom from './TheatreCom/TheatreCom';
import DateCom from './DateCom/DateCom';
import TimeCom from './TimeCom/TimeCom';
import styled from 'styled-components';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';

function Booking() {
  const [list, setList] = useState([]);
  const [activeMovie, setActiveMovie] = useState('');
  const [activeLocation, setActiveLocation] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [activeTime, setActiveTime] = useState('');

  useEffect(() => {
    fetch('/data/all.json')
      .then(response => response.json())
      .then(result => setList(result));
  }, []);

  return (
    <Container>
      <Wrapper>
        <Reset onClick={() => window.location.replace('/booking')}>
          <Icon className="fa-solid fa-arrow-rotate-left" />
          &nbsp;예매 다시하기
        </Reset>
        <InfoWrapper>
          <Ad src="/images/booking/ad.png" alt="poster" />
          <MovieCom
            title={list.title}
            activeMovie={activeMovie}
            setActiveMovie={setActiveMovie}
          />
          <TheatreCom
            location={list.location}
            activeLocation={activeLocation}
            setActiveLocation={setActiveLocation}
          />
          <DateTimeWrapper>
            <DateCom
              setSelectedDay={setSelectedDay}
              selectedDay={selectedDay}
            />
            <TimeCom activeTime={activeTime} setActiveTime={setActiveTime} />
          </DateTimeWrapper>
          <Ad src="/images/booking/ad.png" alt="poster" />
        </InfoWrapper>
      </Wrapper>
      <SelectedBar>
        <BarWrapper>
          <Selection>
            <InfoWrapper>
              {activeMovie ? (
                <MovieDetail>{activeMovie}</MovieDetail>
              ) : (
                <Font>영화선택</Font>
              )}

              {activeLocation === '' ? (
                <Font>극장선택</Font>
              ) : (
                <DetailWrapper>
                  <Location>극장 DGV {activeLocation}</Location>
                  <Location>
                    일시&nbsp;
                    {selectedDay &&
                      format(selectedDay, 'PP (eee)', { locale: ko })}
                    &nbsp; {activeTime}
                  </Location>
                  <Location>상영관</Location>
                </DetailWrapper>
              )}
            </InfoWrapper>

            <Font2>
              <ImgAngle
                src="/images/Booking/right-angle.png"
                alt="right-angle"
              />
              좌석선택
            </Font2>
            <Font2>
              <ImgAngle
                src="/images/Booking/right-angle.png"
                alt="right-angle"
              />
              결제
            </Font2>
          </Selection>

          {activeMovie && activeLocation && selectedDay && activeTime ? (
            <ActiveButton>
              <ImgArrow
                src="/images/Booking/final-arrow.png"
                art="right-arrow"
              />
              좌석선택
            </ActiveButton>
          ) : (
            <Button>
              <ImgArrow
                src="/images/Booking/right-arrow.png"
                art="right-arrow"
              />
              좌석선택
            </Button>
          )}
        </BarWrapper>
      </SelectedBar>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.variables.flex('column', '', 'center')}
  padding-top: 1rem;
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'space-between', '')}
  width: 82rem;
  height: 100%;
`;

const Reset = styled.button`
  width: 7rem;
  height: 1.8rem;
  margin: 0 10rem 0.8rem 78%;
  border: 1px solid black;
  border-radius: 6px;
  background-color: #f2f0e5;
  font-size: 0.78rem;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 1rem;
`;

const InfoWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('row', '', '')}
`;

const DateTimeWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('column')}
  height: 100%;
`;

const Ad = styled.img`
  width: 10rem;
  height: 19rem;
  margin: 0 0.2rem;
  object-fit: fill;
`;

const SelectedBar = styled.div`
  ${({ theme }) => theme.variables.flex('', 'center', 'center')}
  background-color: #1d1d1c;
  height: 7.9rem;
  width: 100vw;
`;

const BarWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('', 'space-between', 'center')}
  width: 63rem;
`;

const Selection = styled.div`
  ${({ theme }) => theme.variables.flex('', 'center', 'center')}
`;

const DetailWrapper = styled.div`
  ${({ theme }) =>
    theme.variables.flex('column', 'space-between', 'space-between')}
  height: 4rem;
  width: 13rem;
  padding-left: 1rem;
  border-right: 1px solid rgb(100 100 100 / 50%);
`;

const Location = styled.div`
  color: white;
  font-size: 0.8rem;
`;

const Font = styled.div`
  height: 4rem;
  width: 13rem;
  border-right: 1px solid rgb(100 100 100 / 50%);
  font-size: 1.5rem;
  color: #e6e4d9;

  ${({ theme }) => theme.variables.flex('', 'center', 'center')}
`;

const MovieDetail = styled(Font)``;

const Font2 = styled(Font)`
  width: 9rem;
  border: none;
`;

const ImgAngle = styled.img`
  height: 1.6rem;
  padding: 0 1rem;
`;

const Button = styled.button`
  ${({ theme }) => theme.variables.flex('column', 'space-evenly')}
  width: 6rem;
  height: 6rem;
  border: 1px solid #e6e4d9;
  border-radius: 10px;
  background-color: #343433;
  color: white;
  font-size: 1rem;
`;

const ActiveButton = styled(Button)`
  background-color: #bf2928;
  border: 1px solid red;
  font-weight: 700;
  cursor: pointer;
`;

const ImgArrow = styled.img`
  width: 3rem;
`;

export default Booking;
