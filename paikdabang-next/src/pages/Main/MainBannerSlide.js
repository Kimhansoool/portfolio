import React, {memo} from 'react';
import styled from 'styled-components';
import ImageSlider from 'react-simple-image-slider';

const MainBannerSlideContainer = styled.div``;

const MainBannerSlide = memo(() => {
  const images = [
    {url: './img/slides/slide1.jpg'},
    {url: './img/slides/slide2.jpg'},
    {url: './img/slides/slide3.jpg'},
    {url: './img/slides/slide4.jpg'},
    {url: './img/slides/slide5.jpg'}
  ];

  return (
    <MainBannerSlideContainer>
      <ImageSlider
        width="100%"
        height={620}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={5.0}
        loop={true}
        style={{margin: 'auto'}}
      />
    </MainBannerSlideContainer>
  );
});

export default MainBannerSlide;
