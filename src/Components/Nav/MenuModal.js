import React from 'react';
import styled from 'styled-components';

function MenuModal({ toggleModal, changePositionScroll }) {
  return (
    <Wrapper
      onMouseLeave={e => {
        e.stopPropagation();
        toggleModal();
      }}
    >
      <ModalMenu onClick={() => changePositionScroll('infoRef')}>
        Info
      </ModalMenu>
      <ModalMenu onClick={() => changePositionScroll('profilesRef')}>
        Profiles
      </ModalMenu>
      <ModalMenu onClick={() => changePositionScroll('skillsRef')}>
        Skills
      </ModalMenu>
      <ModalMenu onClick={() => changePositionScroll('archivingsRef')}>
        Archivings
      </ModalMenu>
      <ModalMenu onClick={() => changePositionScroll('projectsRef')}>
        Projects
      </ModalMenu>
      <ModalMenu onClick={() => changePositionScroll('careersRef')}>
        Careers
      </ModalMenu>
    </Wrapper>
  );
}

export default MenuModal;

const Wrapper = styled.div`
  width: 100%;
  max-width: 71.25rem;
  background-color: #fff;
  max-height: 25rem;
  padding: 0 2rem 1.25rem 2rem;
  margin: 0 auto;
`;

const ModalMenu = styled.div`
  margin-top: 1rem;
  padding: 0.75rem 0 0 0;
  font-weight: 700;
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.25rem;
  cursor: pointer;
  &:hover {
    color: #f24516;
  }
`;
