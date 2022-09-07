import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Top>
          {COMPANY.map((item, index) => (
            <Info key={index}>{item}</Info>
          ))}
        </Top>
        <Bottom>
          <BottomInfo>서울특별시 강남구 테헤란로 427, 위워크타워</BottomInfo>
          {COMPANY_INFO.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
          <BottomInfo>© DGV. All Rights Reserved</BottomInfo>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

const COMPANY = [
  '회사소개',
  'IR',
  '채용정보',
  '광고/제휴/출점문의',
  '이용약관',
  '편성기준',
  '개인정보처리방침',
  '법적고지',
  '이메일주소무단수집거부',
  '윤리경영',
  '사이버감사실',
];

const COMPANY_INFO = [
  '대표이사 : ',
  '하서율',
  '・ 사업자등록번호 : ',
  '000-000-0000000',
  '・ 통신판매업신고번호 : ',
  '2022-서울선릉-0662 ',
  '사업자정보확인',
  '・ 호스팅사업자 : ',
  'DGV레모나네트윅스',
  '・ 개인정보보호 책임자 : ',
  '정세한',
  '・ 대표이메일 :',
  'dgv@dgv.com',
];

const Container = styled.div`
  background-color: #f8f8f8;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60rem;
`;

const Top = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', '')}
  padding: 4rem 0.5rem 2rem;
  margin: 0 auto;
  border-bottom: 1px solid rgb(0 0 0 / 10%);
`;

const Info = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: rgb(0 0 0 / 60%);
`;
const Bottom = styled.div`
  width: 60%;
  margin: 2rem 0;
  padding-bottom: 3rem;
`;

const Item = styled.span`
  width: 60%;
  font-size: 0.8rem;
  color: grey;
`;

const BottomInfo = styled(Info)`
  width: 60%;
  color: grey;
  font-weight: 500;
`;
export default Footer;
