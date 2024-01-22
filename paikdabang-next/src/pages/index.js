import React, {memo} from 'react';
import styled from 'styled-components';

import MainBannerSlide from './Main/MainBannerSlide';
import PalksStory from './Main/PalksStory';
import Menu from './Main/Menu';
import BottomContent from './Main/BottomContent';
import Sns from './Main/Sns';

const index = memo(() => {
  return (
    <index>
      <MainBannerSlide />
      <PalksStory />
      <Menu />
      <BottomContent />
      <Sns />
    </index>
  );
});

export default index;
