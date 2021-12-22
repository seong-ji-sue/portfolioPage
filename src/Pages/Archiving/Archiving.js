import React, { useEffect, useState } from 'react';
import Title from './../../Components/Title/Title';
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
        <Title content='ARCHIVING' borderColor='#6c757d' fontColor='#ffffff' />
        <ArchivingsWrapper>
          {archivingData.map(({ id, image, url, mainContent, subContents }) => {
            return (
              <ArchivingBoxWrapper
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
                <ArchivingContent>
                  <ArchivingMainContent>
                    <b className='bold'>{mainContent}</b>
                    입니다.
                  </ArchivingMainContent>
                  <ArchivingSubContent>
                    {subContents.map(({ id, content }) => {
                      return (
                        <li key={id} className='marginBottom'>
                          {content}
                        </li>
                      );
                    })}
                  </ArchivingSubContent>
                </ArchivingContent>
              </ArchivingBoxWrapper>
            );
          })}
        </ArchivingsWrapper>
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
  padding: 4rem 2rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const ArchivingsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const ArchivingBoxWrapper = styled.div`
  width: 26rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  cursor: pointer;
  margin: 1rem;
  @media only screen and (min-width: 977px) {
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

const ArchivingContent = styled.div`
  color: #444;
`;

const ArchivingMainContent = styled.p`
  margin: 1.5rem 0;
  & .bold {
    font-weight: bold;
  }
`;

const ArchivingSubContent = styled.ol`
  padding-left: 1rem;
  margin: 0;
  list-style: disc;
  & .marginBottom {
    margin-bottom: 0.8rem;
  }
`;
