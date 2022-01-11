import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

function MenuModal({ isOpen, toggleModal }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Modal style={modalStyle} isOpen={isOpen} onRequestClose={toggleModal}>
      <ModalMenu>Info</ModalMenu>
      <ModalMenu>Profiles</ModalMenu>
      <ModalMenu>Skills</ModalMenu>
      <ModalMenu>Archivings</ModalMenu>
      <ModalMenu>Projects</ModalMenu>
      <ModalMenu>Careers</ModalMenu>
      <ModalMenu>introduction</ModalMenu>
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
