import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { css } from 'styled-components';

function IntroContentCarousel({ name, propsData }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 2,
    arrows: false,
  };

  return (
    <Contain name={name}>
      <Slider {...settings}>
        {propsData.map(data => {
          return (
            <div key={data.id}>
              {name === 'intro' ? (
                <>
                  <QuestionText>{data.question}</QuestionText>
                  <AnswerGroup>
                    {data.answers.map(({ id, answer }) => {
                      return <AnswerText key={id}>{answer}</AnswerText>;
                    })}
                  </AnswerGroup>
                </>
              ) : (
                <>
                  <Image src={data.image} alt={data.name}></Image>
                </>
              )}
            </div>
          );
        })}
      </Slider>
    </Contain>
  );
}

export default IntroContentCarousel;

const introCotain = () => css`
  padding: 0 2rem 0rem 2rem;
`;

const projectCotain = () => css`
  margin-bottom: 4rem;
  @media only screen and (min-width: 1105.78px) {
    width: 30rem;
  }
`;

const Contain = styled.div`
  ${({ name }) => (name === 'intro' ? introCotain() : projectCotain())}
`;

const QuestionText = styled.div`
  font-weight: 900;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  border-left: 5px solid #222;
  padding-left: 0.5rem;
`;

const AnswerGroup = styled.div`
  margin-bottom: 1rem;
`;

const AnswerText = styled.div`
  font-size: 1rem;
  line-height: 1.4;
  margin-top: 0.5rem;
`;

const Image = styled.img`
  width: 97%;
`;
