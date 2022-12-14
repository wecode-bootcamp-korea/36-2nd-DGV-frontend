import React from 'react';
import styled from 'styled-components';

function MovieContents({ title }) {
  return (
    <Container>
      <Contents>
        현빈 , 유해진 , 임윤아, 다니엘헤니 주연
        <br /> 이석훈감독
        <br />
        <br /> 올해 최고의 개봉작 &nbsp;
        <Strong>[ {title} ]</Strong>
        <br />
        <br />
        많은 관심과 사랑 부탁드립니다. <br />
        두근두근...
        <br />
        남한으로 숨어든 글로벌 범죄 조직을 잡기 위해 새로운 공조 수사에 투입된
        북한 형사 ‘림철령’(현빈). 수사 중의 실수로 사이버수사대로 전출됐던 남한
        형사 ‘강진태’(유해진)는 광수대 복귀를 위해 모두가 기피하는 ‘철령’의
        파트너를 자청한다. 이렇게 다시 공조하게 된 ‘철령’과 ‘진태’! ‘철령’과
        재회한 ‘민영’(임윤아)의 마음도 불타오르는 가운데, ‘철령’과 ‘진태’는
        여전히 서로의 속내를 의심하면서도 나름 그럴싸한 공조 수사를 펼친다.
        드디어 범죄 조직 리더인 ‘장명준’(진선규)의 은신처를 찾아내려는 찰나,
        미국에서 날아온 FBI 소속 ‘잭’(다니엘 헤니)이 그들 앞에 나타나는데…!
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  text-align: left;
  margin-bottom: 80px;
  width: 100%;
`;

const Contents = styled.h1`
  font-size: 19px;
  font-weight: 500;
  line-height: 2;
`;

const Strong = styled.span`
  font-weight: 900;
`;
export default MovieContents;
