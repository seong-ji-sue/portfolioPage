import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function Title({ content, borderColor, fontColor }) {
  return (
    <Container fontColor={fontColor}>
      <FontAwesomeIcon className='icon' icon={faLink} />
      &nbsp;
      <Content borderColor={borderColor} fontColor={fontColor}>
        {content}
      </Content>
    </Container>
  );
}

export default Title;

const Container = styled.div`
  display: table;
  position: relative;
  margin: 0 auto 3rem;
  & .icon {
    width: 2rem;
    height: 2rem;
    opacity: 0.5;
    color: ${({ fontColor }) => fontColor};
  }
`;

const Content = styled.span`
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  color: ${({ fontColor }) => fontColor};
  font-family: 'Black Han Sans, sans-serif';
  font-weight: 400;
  @media only screen and (min-width: 575px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 940px) {
    font-size: 3rem;
  }
  font-size: 2rem;
  line-height: 1.5;
`;
