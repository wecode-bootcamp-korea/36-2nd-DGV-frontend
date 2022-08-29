import styled from 'styled-components';

function MovieCom({ title, activeMovie, setActiveMovie }) {
  return (
    <Movie>
      <Title>영화</Title>
      <Content>
        <Top>전체</Top>
        <Arrange>가나다순</Arrange>
        {title &&
          title.map(item => (
            <List
              onClick={() => setActiveMovie(item.title)}
              activeMovie={activeMovie === item.title}
              key={item.id}
            >
              {item.title}
            </List>
          ))}
      </Content>
    </Movie>
  );
}

const Movie = styled.div`
  width: 30%;
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
  overflow: scroll;
`;

const Top = styled.div`
  padding: 0.4rem;
  border: 1px solid black;
  border-bottom: 0;
  text-align: center;
  font-size: 0.9rem;
`;

const Arrange = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.6rem 0.5rem 0;
  border-bottom: 2px solid rgb(0 0 0 /20%);
  font-size: 0.8rem;
`;

const List = styled.div`
  padding: 0.5rem;
  cursor: pointer;

  ${({ activeMovie }) =>
    activeMovie &&
    `
  background-color: black;
  color: white;`}
`;

export default MovieCom;
