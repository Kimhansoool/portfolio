import React, {memo} from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBanner from './MainBanner';
import Introduce from './Introduce';

const IndexContainer = styled.div``;

const index = memo(() => {
  return (
    <IndexContainer>
        <Header />
        <MainBanner />
        <Introduce />
        <Footer />
    </IndexContainer>
  );
});

export default index;
