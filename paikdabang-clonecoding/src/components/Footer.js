import React, {memo} from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #f0f5;
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
      <h1>Footer</h1>
    </FooterContainer>
  );
});

export default Footer;
