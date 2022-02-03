import React from 'react';
import styled from 'styled-components';

function Info({ infoData, infoRef }) {
  const { title, developer, firstSentence, secondSentence, thirthSentence } =
    infoData;
  return (
    <BackgroundImage>
      <Container ref={infoRef}>
        <Wrapper>
          <TitleInfo>
            {developer}
            <br />
            {title}
          </TitleInfo>
          <Boundary />
          <IntroduceMy>
            {firstSentence}
            <br />
            {secondSentence}
            <br />
            {thirthSentence}
            <br />
          </IntroduceMy>
          <LearnMoreButton>더 알아보기 ↓</LearnMoreButton>
        </Wrapper>
      </Container>
    </BackgroundImage>
  );
}

export default Info;

const BackgroundImage = styled.div`
  background: linear-gradient(
      180deg,
      rgba(112, 93, 80, 0.8) 0,
      rgba(112, 93, 80, 0.8) 90%
    ),
    url('https://ifh.cc/g/961Ff9.jpg') 50% no-repeat;
  background-size: cover;
  z-index: -1;
`;

const Container = styled.div`
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  padding: calc(4rem + 4.5rem) 2rem 4rem;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 1.5rem 0;
  border: none;
  border-top: 0.2rem solid #f4623a;
`;

const IntroduceMy = styled.div`
  margin: 0 auto 2rem;
  font-weight: 400;
  font-size: 1.25rem;
  color: hsla(0, 0%, 100%, 0.75);
  line-height: 1.5;
`;

const LearnMoreButton = styled.div`
  width: 175px;
  padding: 1.5rem 2rem;
  border-radius: 10rem;
  background-color: #f4623a;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    outline: rgb(255, 0, 0) dashed 1px;
    background-color: #f24516;
  }
`;
