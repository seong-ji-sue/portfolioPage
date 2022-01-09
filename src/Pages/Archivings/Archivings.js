import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import styled from 'styled-components';

function Archiving() {
  const [archivingData, setArchivingData] = useState([]);

  useEffect(() => {
    fetch('/data/Archiving.json')
      .then(res => res.json())
      .then(data => setArchivingData(data.archivingData))
      .catch(console.log);
  }, []);

  return (
    <BackgroundColor>
      <Container>
        <Title content='ARCHIVINGS' borderColor='#6c757d' fontColor='#ffffff' />
        <Wrapper>
          {archivingData.map(({ id, image, url, mainContent, subContents }) => {
            return (
              <BoxWrapper
                key={id}
                onClick={() => {
                  window.open(`https://${url}`, '_blank');
                }}
              >
                <ArchivingImage
                  src={`/images/Archiving/${image}.png`}
                  alt={image}
                ></ArchivingImage>
                <ArchivingLink>{url}</ArchivingLink>
                <div>
                  <MainContent>
                    <b className='bold'>{mainContent}</b>
                    입니다.
                  </MainContent>
                  <SubContent>
                    {subContents.map(({ id, content }) => {
                      return (
                        <li key={id} className='liStyle'>
                          {content}
                        </li>
                      );
                    })}
                  </SubContent>
                </div>
              </BoxWrapper>
            );
          })}
        </Wrapper>
      </Container>
    </BackgroundColor>
  );
}

export default Archiving;

const BackgroundColor = styled.div`
  background-color: #222222;
`;

const Container = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 2rem 0.5rem;
  @media only screen and (min-width: 335px) {
    padding: 4rem 2rem;
  }
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const BoxWrapper = styled.div`
  width: 26rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  cursor: pointer;
  margin: 0 auto 2rem;
  @media only screen and (min-width: 1150px) {
    width: 30rem;
  }
  &:hover {
    transform: translateY(10px);
    transition-duration: 0.3s;
  }
`;

const ArchivingImage = styled.img`
  display: block;
  width: 12rem;
  margin-bottom: 1rem;
`;

const ArchivingLink = styled.div`
  margin-top: 1.5rem;
  color: #258ddb;
  cursor: pointer;
`;

const MainContent = styled.p`
  margin: 1.5rem 0;
  & .bold {
    font-weight: bold;
  }
`;

const SubContent = styled.ol`
  padding-left: 1rem;
  margin: 0;
  list-style: disc;
  & .liStyle {
    margin-bottom: 0.8rem;
  }
`;
