import styled from 'styled-components';

function TimeCom({ activeTime, setActiveTime }) {
  return (
    <Time>
      <Title>시간</Title>
      <Content>
        <TimeDiscount>
          <Img src="/images/booking/sun.png" alt="sun" />
          조조 <Img src="/images/booking/moon.png" alt="moon" />
          심야
        </TimeDiscount>
        <MovieTimeWrapper>
          {TIME.map(item => (
            <MovieRow key={item.time}>
              <MovieTime
                activeTime={activeTime === item.time}
                onClick={() => setActiveTime(item.time)}
              >
                {item.time}
              </MovieTime>
            </MovieRow>
          ))}
        </MovieTimeWrapper>
      </Content>
    </Time>
  );
}

const TIME = [
  { id: 1, time: '02:00' },
  { id: 2, time: '16:00' },
  { id: 3, time: '15:00' },
  { id: 4, time: '14:00' },
  { id: 5, time: '06:00' },
  { id: 6, time: '12:00' },
];

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

const MovieTimeWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')}
  flex-wrap: wrap;
  width: 18rem;
`;

const MovieTime = styled.span`
  border: 1px solid rgb(0 0 0 /20%);
  padding: 0.3rem;
  font-weight: 700;
  cursor: pointer;

  ${({ activeTime }) =>
    activeTime &&
    `background-color: black;
  color: white;
  `}
`;

const MovieRow = styled.div`
  width: 5rem;
  padding: 1rem;
`;

export default TimeCom;
