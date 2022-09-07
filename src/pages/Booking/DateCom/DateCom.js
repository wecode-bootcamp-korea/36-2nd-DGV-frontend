import { DayPicker } from 'react-day-picker';
import { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';
import ko from 'date-fns/locale/ko';

function DateCom({ selectedDay, setSelectedDay, getMovieId, activeLocation }) {
  const [list, setList] = useState('');
  const today = new window.Date();

  const disabledDays = [
    {
      from: new window.Date(2022, 1, 1),
      to: today.setDate(today.getDate() - 1),
    },
  ];

  // useEffect(() => {
  //   fetch(`/data/date.json`)
  //     .then(response => response.json())
  //     .then(result => setList(result));
  // }, []);

  useEffect(() => {
    fetch(
      `http://10.58.2.182:3000/movies/idandsublocation?movieId=${getMovieId}&subLocationName="${activeLocation}"`
    )
      .then(response => response.json())
      .then(result => setList(result));
  }, [getMovieId, activeLocation]);

  const modifiers = {
    movieDay:
      list.timeList && list.timeList.map(item => new window.Date(item.date)),
  };

  const modifiersStyles = {
    movieDay: { color: 'white', backgroundColor: 'tomato' },
  };

  return (
    <Date>
      <Title>날짜</Title>
      <Content>
        <CalendarWrapper>
          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            locale={ko}
            onClick={() => {
              setSelectedDay(selectedDay);
              /*fetch(
                `http://10.58.4.124:3000/movies/idandsublocation?movieId=${getId}&subLocationName="${activeLocation}”`
              )
                .then(response => response.json())
                .then(result => setList(result));*/
            }}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            disabled={disabledDays}
          />
        </CalendarWrapper>
      </Content>
    </Date>
  );
}

const Date = styled.div`
  width: 100%;
`;

const Title = styled.div`
  height: 2.2rem;
  border: 0.5px solid wheat;
  border-top: none;
  background-color: #333333;
  color: #f2f0e5;
  padding: 0.7rem 0;
  text-align: center;
`;

const Content = styled.div`
  height: 21rem;
  border: 0.5px solid rgb(0 0 0 /20%);
  background-color: #f2f0e5;
`;

const CalendarWrapper = styled.div`
  &&& {
    .DayPicker,
    .Div {
      :focus {
        outline: none;
      }
    }
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: black;
      --rdp-background-color: #dfe6e9;
      --rdp-outline: 0px solid var(--rdp-accent-color);
      --rdp-outline-selected: 1px solid var(--rdp-accent-color);

      margin: 1em;
    }

    .rdp-weeknumber,
    .rdp-day {
      height: 2rem;
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 2rem;
      max-width: 2rem;
      margin: 0;
      border-radius: 10%;
    }
  }
`;
export default DateCom;
