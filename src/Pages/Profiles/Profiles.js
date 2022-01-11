import React from 'react';
import styled from 'styled-components';
import Title from '../../Components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarAlt,
  faMapMarkedAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function Profiles() {
  const profileData = [
    { id: 1, title: '이름', content: '성지수', icon: faUser },
    { id: 2, title: '생년월일', content: '93.12.02', icon: faCalendarAlt },
    {
      id: 3,
      title: '사는곳',
      content: '인천광역시 서구 마전동',
      icon: faMapMarkedAlt,
    },
    { id: 4, title: '연락처', content: '010-4977-9041', icon: faPhoneAlt },
    {
      id: 5,
      title: '이메일',
      content: 'tjdwltn121@gmail.com',
      icon: faEnvelope,
    },
  ];
  return (
    <Container>
      <Title content='PROFILES' borderColor='#cccccc' />
      <Wrapper>
        {profileData.map(({ id, title, content, icon }) => {
          return (
            <BoxWrapper key={id}>
              <ProfileIcon>
                <FontAwesomeIcon className='iconStyle' icon={icon} />
              </ProfileIcon>
              <div>
                <ProfileTitle>{title}</ProfileTitle>
                <ProfileContent>{content}</ProfileContent>
              </div>
            </BoxWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default Profiles;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 71.25rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  max-width: 14rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const ProfileIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0.2rem 1.5rem;
  & .iconStyle {
    font-size: 1.35rem;
    @media only screen and (min-width: 575px) {
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 940px) {
      font-size: 1.65rem;
    }
  }
`;

const ProfileTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.15rem;
  @media only screen and (min-width: 575px) {
    font-size: 1.25rem;
  }
  @media only screen and (min-width: 940px) {
    font-size: 1.35rem;
  }
`;

const ProfileContent = styled.div`
  font-weight: 500;
  font-size: 0.9rem;
  @media only screen and (min-width: 575px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 940px) {
    font-size: 1.15rem;
  }
`;
