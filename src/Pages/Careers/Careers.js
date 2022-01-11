import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../../Components/Title/Title';

function Career() {
  const [CarrerData, setCareerData] = useState([]);

  useEffect(() => {
    fetch('/data/Career.json')
      .then(res => res.json())
      .then(data => setCareerData(data.CareerData))
      .catch(console.log);
  }, []);

  return (
    <BackgroundColor>
      <Contain>
        <Title content='CAREERS' borderColor='#000000' fontColor='#000000' />
        <Wrapper>
          {CarrerData.map(({ id, name, kor, date, descriptions, works }) => {
            return (
              <BoxWrapper key={id}>
                <CareerImg>
                  <LogoWrapper>
                    <CompanyLogo
                      src={`/images/Career/${name}.png`}
                      alt={name}
                    />
                  </LogoWrapper>
                </CareerImg>
                <CareerInfo>
                  <CarrerTitle>{kor}</CarrerTitle>
                  <CarrerDate>{date}</CarrerDate>
                  <CareerDescription>
                    {descriptions.map(({ id, content }) => {
                      return (
                        <div key={id}>
                          {content}
                          <br />
                          <br />
                        </div>
                      );
                    })}
                  </CareerDescription>
                  {works.map(({ id, title, period, contents }) => {
                    return (
                      <CareerWork key={id}>
                        <WorkTitle>{title}</WorkTitle>
                        <WorkPeriod>{period}</WorkPeriod>
                        {contents.map(({ id, content }) => {
                          return <WorkContent key={id}>{content}</WorkContent>;
                        })}
                      </CareerWork>
                    );
                  })}
                </CareerInfo>
              </BoxWrapper>
            );
          })}
        </Wrapper>
      </Contain>
    </BackgroundColor>
  );
}

export default Career;

const BackgroundColor = styled.div`
  background-color: #f5f5f5;
`;

const Contain = styled.div`
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const CareerImg = styled.div`
  padding-right: 2rem;
  margin-bottom: 2rem;
  @media only screen and (min-width: 760px) {
    padding-right: 3rem;
    border-right: 1px solid #cccccc;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid #cccccc;
  border-radius: 10rem;
  background-color: #ffffff;
  width: 10rem;
  height: 10rem;

  @media only screen and (min-width: 640px) {
    width: 15rem;
    height: 15rem;
  }

  @media only screen and (min-width: 760px) {
    width: 10rem;
    height: 10rem;
  }
  @media only screen and (min-width: 1020px) {
    width: 15rem;
    height: 15rem;
  }

  margin: 0 auto;
`;

const CompanyLogo = styled.img`
  width: 100%;
`;

const CareerInfo = styled.div`
  @media only screen and (min-width: 640px) {
    padding-left: 3rem;
  }
  padding-left: 1rem;
`;

const CarrerTitle = styled.p`
  padding-bottom: 1rem;
  font-weight: bold;
  font-size: 1.7rem;
`;

const CarrerDate = styled.p`
  padding-bottom: 2rem;
  font-weight: 400;
  font-size: 1.1rem;
  color: #6c757d;
`;

const CareerDescription = styled.div`
  border-bottom: 1px solid #ccc;
  line-height: 1.5;
`;

const CareerWork = styled.ul`
  padding-left: 1rem;
  margin: 1rem 0;
  list-style-type: disc;
`;

const WorkTitle = styled.p`
  font-weight: bold;
  border-left: 5px solid #222;
  padding-left: 1rem;
  margin: 2rem 0 1rem -1rem;
  font-size: 1rem;
  color: #222222;
`;

const WorkPeriod = styled.h5`
  margin: 0 0 1rem -1rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #6c757d;
`;

const WorkContent = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
`;