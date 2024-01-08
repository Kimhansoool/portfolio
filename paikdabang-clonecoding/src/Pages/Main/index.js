import React, {memo} from 'react';
import styled from 'styled-components';

import MainBannerSlide from './MainBannerSlide';

const IndexContainer = styled.div`
  background-color: #0f05;
`;

const index = memo(() => {
  return (
    <IndexContainer>
      <h1>content</h1>
      <MainBannerSlide />
    </IndexContainer>
  );
});

export default index;
