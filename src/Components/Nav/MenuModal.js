import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

function MenuModal({ isOpen, toggleModal, changePositionScroll }) {
  return (
    <Modal
      style={modalStyle}
      isOpen={isOpen}
      onRequestClose={toggleModal}
      ariaHideApp={false}
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
    </Modal>
  );
}

export default MenuModal;

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
  },
  content: {
    boxShadow: '0 1px 0.3rem #d3d3d3',
    maxHeight: '24rem',
    paddingLeft: '2rem',
    transition: 'max-height 0.2s ease',
  },
};

const ModalMenu = styled.div`
  display: table;
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
