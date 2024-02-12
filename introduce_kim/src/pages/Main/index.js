import React, {memo, useEffect, useState} from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBanner from './MainBanner';
import Introduce from './Introduce';
import Portfolio from './Portfolio';
import Sns from './Sns';

const IndexContainer = styled.div``;

const index = memo(() => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() =>{
    window.addEventListener('scroll', (e) =>{
      setScrollY(window.scrollY);
      console.log(scrollY);
      // console.log('scrolling~~~');
    })
  }, [scrollY]);

  return (
    <IndexContainer>
        <Header />
        <MainBanner />
        <Introduce />
        <Portfolio />
        <Sns />
        <Footer />
    </IndexContainer>
  );
});

export default index;
