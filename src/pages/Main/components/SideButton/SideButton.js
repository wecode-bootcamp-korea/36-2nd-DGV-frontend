import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SideButton({ opacity }) {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Container>
      <Bookingbtn opacity={opacity}>
        <StyleLink to="/booking">예매하기</StyleLink>
      </Bookingbtn>
      <GotoTop opacity={opacity}>
        <Img src="/images/Main/up.png" onClick={moveToTop} />
      </GotoTop>
    </Container>
  );
}
const Container = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')}
  position: fixed;
  top: 550px;
  right: 180px;
  margin-left: 440px;
  z-index: 3;
`;
const Bookingbtn = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')}
  background-image: linear-gradient(to left, rgb(255, 115, 86), rgb(251, 67, 87));
  width: 136px;
  min-height: 50px;
  box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
  padding: 12px 0 14px;
  opacity: ${props => props.opacity};
  transition: right 2s ease;
`;

const Img = styled.img`
  width: 15px;
  height: 21px;
  cursor: pointer;
`;

const GotoTop = styled.div`
  text-align: center;
  background-color: white;
  width: 50px;
  min-height: 50px;
  box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
  border-radius: 50px;
  border: 1px solid black;
  margin-left: 10px;
  color: white;
  text-align: center;
  opacity: ${props => props.opacity};
  padding: 12px 0 14px;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;
export default SideButton;
