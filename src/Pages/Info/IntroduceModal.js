import React, { useEffect, useState } from 'react';
import Modal from 'styled-react-modal';
import Title from '../../Components/Title/Title';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TotalCarousel from '../../Components/Carousel/TotalCarousel';
import axios from 'axios';
import { MOCK_INTRODUCES_API } from '../../utils/api';

export default function IntroduceModal({ isOpen, toggleModal }) {
  const [introContentData, setIntroContentData] = useState([]);

  useEffect(() => {
    axios
      .get(`${MOCK_INTRODUCES_API}`)
      .then(res => {
        setIntroContentData(res.data.introduceData);
      })
      .catch(() => {
        console.log('FAIL!!');
      });
  }, []);

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <FontAwesomeIcon
          className='cancelMainModal'
          icon={faTimesCircle}
          onClick={e => {
            e.stopPropagation();
            toggleModal();
          }}
        />
        <Title content='INTRODUCE' borderColor='#6c757d' fontColor='#000000' />
        <TotalCarousel name={'intro'} propsData={introContentData} />
      </StyledModal>
    </div>
  );
}

const StyledModal = Modal.styled`
  display:flex;
  flex-direction:column;
  width: 500px;
  height:720px;
  background-color : white;
  border-radius: 10px;
  & .cancelMainModal{
    align-self :flex-end;
    display: block;
    margin: 15px 15px 0 0;
    font-size: 30px;
    color: black;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
