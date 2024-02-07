import React, {memo} from 'react';
import styled from 'styled-components';

const MainBannerContainer = styled.div`
    width:100%;
    height:100vh;
    background-color: #000;
`;

const MainBanner = memo(() => {
  return (
    <MainBannerContainer>
      <h1>MainBanner</h1>
    </MainBannerContainer>
  );
});

export default MainBanner;
