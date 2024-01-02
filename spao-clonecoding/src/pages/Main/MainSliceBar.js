import React, {memo} from 'react';
import styled from 'styled-components';

const MainSliceBarContainer = styled.div`
    background-color: #00f5;
    width:100%;
    height:100vh;
    margin-top:-120px;
`;

const MainSliceBar = memo(() => {
  return (
    <MainSliceBarContainer>
      <h1>MainSliceBar</h1>
    </MainSliceBarContainer>
  );
});

export default MainSliceBar;
