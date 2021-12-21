import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Info() {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    fetch('/data/Info.json')
      .then(res => res.json())
      .then(data => setInfoData(data.infoData))
      .catch(console.log);
  }, []);

  return (
    <Container>
      <ContentWraper>
        <TitleInfo>
          {infoData.titleName}
          <br />
          {infoData.titleContent}
        </TitleInfo>
        <Boundary></Boundary>
        <ContentInfo>
          {infoData.contentFirstLine}
          <br />
          {infoData.contentSecondLine}
          <br />
          {infoData.contentThirthLine}
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 175px;
  padding: 1rem 2rem;
  border-radius: 10rem;
  background-color: #f4623a;
  font-size: 1rem;
  color: #fff;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Noto Sans KR,sans-serif';
  &:hover {
    outline: rgb(255, 0, 0) dashed 1px;
    background-color: #f24516;
  }
`;
