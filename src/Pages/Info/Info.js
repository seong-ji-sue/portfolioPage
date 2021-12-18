import React from 'react';
import styled from 'styled-components';

function Info() {
  return (
    <Container>
      <ContentWraper>
        <TitleInfo>
          - 성지수 -
          <br />웹 개발자 포토폴리오
        </TitleInfo>
        <Boundary></Boundary>
        <ContentInfo>
          안녕하세요.
          <br />
          공부가 취미인 프론트 엔드 개발자입니다.
          <br />
          매우 꼼꼼한 성격, 그리고 주변에게도 전달되는 열정적인 에너지가 저의
          장점입니다.
          <br />
        </ContentInfo>
        <LearnMoreButton>더 알아보기 ↓</LearnMoreButton>
      </ContentWraper>
    </Container>
  );
}

export default Info;

const Container = styled.div`
  background: linear-gradient(
      180deg,
      rgba(112, 93, 80, 0.8) 0,
      rgba(112, 93, 80, 0.8) 90%
    ),
    url('/images/HeaderImg.jpg') 50% no-repeat;
  background-size: cover;
  z-index: -1;
`;

const ContentWraper = styled.div`
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  padding: calc(4rem + 4.5rem) 2rem 4rem;
  text-align: center;
`;

const TitleInfo = styled.div`
  font-family: 'Black Han Sans, sans-serif';
  font-weight: 400;
  font-size: 4rem;
  color: #fff;
  word-break: keep-all;
`;

const Boundary = styled.hr`
  width: 3.25rem;
  height: 0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border-top: 0.2rem solid #f4623a;
`;

const ContentInfo = styled.div`
  margin: 0 auto 2rem;
  font-weight: 400;
  font-size: 1.25rem;
  color: hsla(0, 0%, 100%, 0.75);
  line-height: 1.5;
  font-family: 'Noto Sans KR,sans-serif';
`;

const LearnMoreButton = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10rem;
  background-color: #f4623a;
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Noto Sans KR,sans-serif';
  &:hover {
    outline: rgb(255, 0, 0) dashed 1px;
    background-color: #f24516;
  }
`;
