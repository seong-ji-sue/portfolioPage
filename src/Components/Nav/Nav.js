import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuModal from './MenuModal';

function Nav({ multiRef }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const changePositionScroll = whereMovePosition => {
    toggleModal();
    multiRef[whereMovePosition]?.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Contain>
      <HeaderWrapper>
        <HeaderTitle
          onClick={() => {
            window.location.reload();
            multiRef.InfoRef.current.scrollIntoView();
          }}
        >
          JiSue`s Portfolio
        </HeaderTitle>
        <ImagWrapper
          onClick={e => {
            e.stopPropagation();
            toggleModal();
          }}
        >
          <FontAwesomeIcon className='icon' icon={faBars} />
        </ImagWrapper>
      </HeaderWrapper>
      {isOpen && (
        <MenuModal
          changePositionScroll={changePositionScroll}
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
      )}
    </Contain>
  );
}

export default Nav;

const Contain = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 0.3rem #d3d3d3;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 71.25rem;
  height: 4.5rem;
  padding: 1.25rem 2rem;
  margin: 0 auto;
`;

const HeaderTitle = styled.span`
  color: #453a33;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  cursor: pointer;
  &:hover {
    color: #f24516;
  }
`;

const ImagWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 3.5rem;
  height: 3rem;
  padding: 0.5rem 0;
  margin-top: -0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  cursor: pointer;
  & .icon {
    font-size: 1.6rem;
    color: #6c757d;
    &:hover {
      color: #f24516;
    }
  }
`;
