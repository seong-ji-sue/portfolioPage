import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarAlt,
  faMapMarkedAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
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
      <TitleWrapper>
        <TitleIcon />
        &nbsp;
        <TitleContent> About Me</TitleContent>
      </TitleWrapper>
      <ProfilesWrapper>
        {profileData.map(({ id, title, content, icon }) => {
          return (
            <Profile key={id}>
              <ProfileIcon>
                <FontAwesomeIcon className='iconWidth' icon={icon} />
              </ProfileIcon>
              <div>
                <ProfileTitle>{title}</ProfileTitle>
                <ProfileContent>{content}</ProfileContent>
              </div>
            </Profile>
          );
        })}
      </ProfilesWrapper>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 71.25rem;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  display: table;
  position: relative;
  margin: 0 auto 3rem;
`;

const TitleIcon = styled.img.attrs({
  alt: 'TitleIcon',
  src: '/images/TitleIcon.png',
})`
  width: 2rem;
  height: 2rem;
  opacity: 0.5;
  cursor: pointer;
`;

const TitleContent = styled.span`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
  font-family: 'Black Han Sans, sans-serif';
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.5;
`;

const ProfilesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  display: flex;
  flex-flow: row nowrap;
  max-width: 14rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  width: 100%;
`;

const ProfileIcon = styled.div`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  margin-top: 0.2rem;
  margin-right: 1.5rem;
  & .iconWidth {
    font-size: 1.5rem;
  }
`;

const ProfileTitle = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  font-family: 'Noto Sans KR,sans-serif';
`;

const ProfileContent = styled.div`
  font-weight: 500;
  font-size: 1rem;
  font-family: 'Noto Sans KR,sans-serif';
`;
