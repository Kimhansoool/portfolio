import React, {memo} from 'react';
import styled from 'styled-components';

import MainBannerSlide from './MainBannerSlide';
import PalksStory from './PalksStory';
import Menu from './Menu';

const IndexContainer = styled.div`
`;

const index = memo(() => {
  return (
    <IndexContainer>
      <MainBannerSlide />
      <PalksStory />
      <Menu />
    </IndexContainer>
  );
});

export default index;
