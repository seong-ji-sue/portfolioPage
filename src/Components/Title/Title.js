import React from 'react';
import styled from 'styled-components';

function Title({ content, borderColor }) {
  return (
    <Container>
      <Icon />
      &nbsp;
      <Content color={borderColor}>{content}</Content>
    </Container>
  );
}

export default Title;

const Container = styled.div`
  display: table;
  position: relative;
  margin: 0 auto 3rem;
`;

const Icon = styled.img.attrs({
  alt: 'TitleIcon',
  src: '/images/TitleIcon.png',
})`
  width: 2rem;
  height: 2rem;
  opacity: 0.5;
  cursor: pointer;
`;

const Content = styled.span`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ color }) => color};
  font-family: 'Black Han Sans, sans-serif';
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.5;
`;
