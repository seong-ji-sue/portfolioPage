import React from 'react';
import styled from 'styled-components';

function DescriptionTable({ descriptions }) {
  return (
    <ProjectTable>
      {descriptions?.map(({ id, main, text, link }) => {
        return (
          <ProjectDescription key={id}>
            <DescriptionLabel>{main}</DescriptionLabel>
            <DescriptionValue>
              {text ? (
                text
              ) : (
                <LinkText href={link} target='_blank'>
                  {link}
                </LinkText>
              )}
            </DescriptionValue>
          </ProjectDescription>
        );
      })}
    </ProjectTable>
  );
}

export default DescriptionTable;

const ProjectTable = styled.div`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1rem;
`;

const ProjectDescription = styled.div`
  margin-bottom: 1rem;
`;

const DescriptionLabel = styled.div`
  border-left: 5px solid #222;
  font-weight: 900;
  font-size: 1rem;
  vertical-align: top;
  line-height: 1.5;
  font-family: 'Noto Sans KR,sans-serif';
  padding-left: 0.5rem;
  @media only screen and (min-width: 650px) {
    display: inline-block;
    width: 10rem;
    border: none;
    &::before {
      content: '✔';
      padding-right: 0.5rem;
    }
  }
`;

const DescriptionValue = styled.div`
  font-weight: 400;
  font-size: 1rem;
  vertical-align: top;
  line-height: 1.5;
  font-family: 'Noto Sans KR,sans-serif';
  @media only screen and (min-width: 650px) {
    display: inline-block;
    width: calc(100% - 10rem);
  }
`;

const LinkText = styled.a`
  text-decoration: none;
  color: #258ddb;
  cursor: pointer;
`;
