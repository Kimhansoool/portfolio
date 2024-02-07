import React, {memo} from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #ff05;
`;

const Footer = memo(() => {
  return (
    <FooterContainer>
      <h1>Footer</h1>
    </FooterContainer>
  );
});

export default Footer;
