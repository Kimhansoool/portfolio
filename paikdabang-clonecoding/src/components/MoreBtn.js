import React, {memo} from 'react';
import styled from 'styled-components';

const MoreBtnContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 3px 3px 10px #00000020;

    div{
      width:18px;
      height:18px;
    }
`;

const MoreBtn = memo(({props}) => {
  return (
    <MoreBtnContainer href={props}>
      <div>
        <img src='/img/icon/view_icon.png' alt='seeMore Button' />
      </div>
    </MoreBtnContainer>
  );
});

export default MoreBtn;
