import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LinktoButton({ id }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <Button backgcolor="white" color="black">
          상세보기
        </Button>
      </Link>
      <Link to="/booking">
        <Button2 backgcolor="#FB4357" color="white">
          예매하기
        </Button2>
      </Link>
    </div>
  );
}

const Button = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 136px;
  min-height: 40px;
  height: 40px;
  padding: 12px 0 14px;
  border-radius: 15px;
  background-color: ${props => props.backgcolor};
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  z-index: 2;
`;

const Button2 = styled(Button)`
  top: 70%;
`;
export default LinktoButton;
