import { useState } from 'react';
import styled from 'styled-components';

function TheatreCom({
  locations,
  activeLocation,
  setActiveLocation,
  setList,
  getMovieId,
}) {
  const [getId, setGetId] = useState('서울');

  return (
    <Theatre>
      <Title>극장</Title>
      <Content>
        <Top>전체</Top>
        <Wrapper>
          <AreaPart>
            {locations &&
              locations.map(item => {
                return (
                  <Area
                    key={item.main}
                    onClick={() => setGetId(item.main)}
                    getId={getId === item.main}
                  >
                    {item.main}
                  </Area>
                );
              })}
          </AreaPart>
          <LocationPart>
            {locations &&
              locations.map(({ main, sub }) => {
                return (
                  <Location key={main}>
                    {main === getId &&
                      sub.map(index => {
                        return (
                          <Item
                            key={index}
                            onClick={() => {
                              setActiveLocation(index);
                              fetch(
                                `http://10.58.2.182:3000/movies/idandsublocation?movieId=${getMovieId}&subLocationName="${index}"`
                              )
                                .then(response => response.json())
                                .then(result => setList(result));
                            }}
                            activeLocation={activeLocation === index}
                          >
                            {index}
                          </Item>
                        );
                      })}
                  </Location>
                );
              })}
          </LocationPart>
        </Wrapper>
      </Content>
    </Theatre>
  );
}

export default TheatreCom;

const Theatre = styled.div`
  width: 28%;
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
  height: 41.5rem;
  padding: 1rem 1.4rem;
  border: 0.5px solid rgb(0 0 0 /20%);
  background-color: #f2f0e5;
`;

const Top = styled.div`
  padding: 0.4rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-bottom: 0;
  text-align: center;
  font-size: 0.9rem;
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.variables.flex('row', '', 'flex-start')}
`;

const AreaPart = styled.div`
  ${({ theme }) => theme.variables.flex('column')}
  width: 100%;
`;

const Area = styled.div`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #f2f0e5;
  background-color: #e6e4d9;
  font-size: 0.9rem;
  text-align: end;
  cursor: pointer;

  ${({ getId }) => getId && `background-color:#f2f0e5; `}
`;

const LocationPart = styled.div`
  ${({ theme }) => theme.variables.flex('column')}
  width: 100%;
`;

const Location = styled.div`
  width: 100%;
`;

const Item = styled.div`
  height: 2rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;

  ${({ activeLocation }) =>
    activeLocation &&
    `
  background-color: black;
  color: white;`}
`;
