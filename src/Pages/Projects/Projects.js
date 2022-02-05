import React from 'react';
import styled from 'styled-components';
import Title from './../../Components/Title/Title';
import TotalCarousel from '../../Components/Carousel/TotalCarousel';
import DescriptionTable from './DescriptionTable';

function Projects({ projectData, projectsRef }) {
  return (
    <BackgroundColor>
      <Container ref={projectsRef}>
        <Title content='PROJECTS' borderColor='#ffffff' fontColor='#ffffff' />
        <Wrapper>
          {projectData.map(
            ({
              id,
              name,
              title,
              member,
              date,
              images,
              contents,
              descriptions,
            }) => {
              return (
                <BoxWrapper key={id}>
                  <ProjectTitle>{title}</ProjectTitle>
                  <ProjectData>
                    {member} <span>( {date} )</span>
                  </ProjectData>
                  <ChangeLayout>
                    <TotalCarousel name={'project'} propsData={images} />
                    <ProjectContent>
                      {contents.map(({ id, text }) => {
                        return (
                          <div key={id}>
                            {text}
                            <br />
                            <br />
                          </div>
                        );
                      })}
                    </ProjectContent>
                  </ChangeLayout>
                  <DescriptionTable
                    descriptions={descriptions}
                  ></DescriptionTable>
                </BoxWrapper>
              );
            }
          )}
        </Wrapper>
      </Container>
    </BackgroundColor>
  );
}

export default Projects;

const BackgroundColor = styled.div`
  background-color: #1d809f;
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
  display: block;
`;

const BoxWrapper = styled.div`
  padding: 2rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
`;

const ProjectTitle = styled.div`
  padding-bottom: 0.5rem;
  font-family: 'Black Han Sans, sans-serif';
  font-weight: 400;
  font-size: 2rem;
  color: #222;
  text-align: center;
  @media only screen and (min-width: 910px) {
    font-size: 2.5rem;
  }
`;

const ProjectData = styled.div`
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 1rem;
  color: #6c757d;
  text-align: center;
  opacity: 0.8;
`;

const ChangeLayout = styled.div`
  @media only screen and (min-width: 1105.78px) {
    display: flex;
  }
`;

const ProjectContent = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
`;
