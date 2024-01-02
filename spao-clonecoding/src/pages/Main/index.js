import React, {memo} from 'react';
import styled from 'styled-components';
import MainSliceBar from './MainSliceBar';

const IndexContainer = styled.div``;

const index = memo(() => {
  return (
    <IndexContainer>
      <MainSliceBar />
    </IndexContainer>
  );
});

export default index;
