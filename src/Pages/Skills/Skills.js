import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from './../../Components/Title/Title';

function Skills({ SkillsRef }) {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    fetch('/data/Skills.json')
      .then(res => res.json())
      .then(data => setSkillsData(data.skillsData))
      .catch(console.log);
  }, []);

  return (
    <BackgroundColor>
      <Container ref={SkillsRef}>
        <Title content='SKILLS' borderColor='#000000' />
        <Wrapper>
          {skillsData.map(({ id, title, images }) => {
            return (
              <BoxWrapper key={id}>
                <SkillTitle>{title}</SkillTitle>
                <div>
                  {images.map(({ id, image }) => {
                    return (
                      <SkillImage
                        key={id}
                        src={`/images/Skills/${title}/${image}.png`}
                        alt={image}
                      />
                    );
                  })}
                </div>
              </BoxWrapper>
            );
          })}
        </Wrapper>
      </Container>
    </BackgroundColor>
  );
}

export default Skills;

const BackgroundColor = styled.div`
  background-color: #f9c51d;
`;

const Container = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
  @media only screen and (min-width: 575px) {
    height: 170rem;
  }
  @media only screen and (min-width: 605px) {
    height: 150rem;
  }
  @media only screen and (min-width: 635px) {
    height: 130rem;
  }
  @media only screen and (min-width: 665px) {
    height: 110rem;
  }
  @media only screen and (min-width: 940px) {
    height: 90rem;
  }
  @media only screen and (min-width: 1250px) {
    height: 82rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  height: calc(100% - (7rem + 1px));
`;

const BoxWrapper = styled.div`
  width: 15rem;
  padding: 1.5rem;
  margin: 0 1rem 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 /0.2);

  @media only screen and (min-width: 1250px) {
    width: 17rem;
  }
  &:hover {
    transform: translateY(10px);
    transition-duration: 0.3s;
  }
`;

const SkillTitle = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

const SkillImage = styled.img`
  width: 90%;
`;
