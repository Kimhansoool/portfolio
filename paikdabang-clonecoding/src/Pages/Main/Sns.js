import React, {memo} from 'react';
import styled from 'styled-components';

const SnsContainer = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    max-width:1200px;
    height:250px;
    margin:0 auto;
    text-align: center;
    padding:60px;

    .title{
        font-family: 'Nanum Myeongjo', serif;
        font-size:24px;
        font-weight: 900;
        letter-spacing:3px;
    }

    .content{
        margin-top:20px;
        color:#aaaaaa;
    }

    .divider{
        width:50px;
        margin-top:30px;
        margin-bottom:30px;
    }

    .icon{
        img{
            width:35px;
            margin-right:10px;

            &:last-child{
                margin-right:0;
            }
        }
    }
`;

const Sns = memo(() => {
  return (
    <SnsContainer>
        <div className='SNSWrap'>
            <h3 className='title'>PAIK’S COFFEE SNS</h3>
            <p className='content'>#빽다방 #빽다방신메뉴 #빽다방이벤트</p>
            <hr className='divider' />
            <div className='icon'>
                <img src='/img/icon/faceBook_icon.png' />
                <img src='/img/icon/instagram_icon.png' />
            </div>
        </div>
    </SnsContainer>
  );
});

export default Sns;
