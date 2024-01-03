import React, {memo} from 'react';
import styled from 'styled-components';
import MainSliceBar from './MainSliceBar';
import WeeklyBest from './WeeklyBest';

const IndexContainer = styled.div`

`;

const index = memo(() => {
  return (
    <IndexContainer>
      <MainSliceBar />
      <WeeklyBest />
    </IndexContainer>
  );
});

export default index;
