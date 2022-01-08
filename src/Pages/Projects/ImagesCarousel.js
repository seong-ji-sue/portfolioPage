import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

function ImagesCarousel({ name, images }) {
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
    <Contain>
      <style>{cssstyle}</style>
      <Slider {...settings}>
        {images.map(({ id, image }) => {
          return (
            <div key={id}>
              <Image
                src={`/images/Projects/${name}/${image}.png`}
                alt={image}
              ></Image>
            </div>
          );
        })}
      </Slider>
    </Contain>
  );
}

export default ImagesCarousel;

const Contain = styled.div`
  margin-bottom: 4rem;
  @media only screen and (min-width: 1105.78px) {
    width: 30rem;
  }
`;

const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #000;
}
`;

const Image = styled.img`
  width: 97%;
`;
