import React, {memo} from 'react';
import styled from 'styled-components';

const IntroduceContainer = styled.div`
    background-color: #333;
    width:100%;

    .contentWrap{
        max-width: 1200px;
        margin:0 auto;
        padding-top:80px;

        .title{
            font-size:28px;
            color:#fff;
            height:max-content;

            .point{
                font-size:28px;
                color:#fff;
                font-weight: 800;
            }
        }

        .hashTagWrap{
            margin-top:40px;

            .hashTagInner{
                display: flex;

                .tagItem{
                    font-size:18px;
                    color:#fff;
                    margin-left:8px;
                    font-weight: 300;

                    &:first-child{margin-left:0;}

                    padding:15px 22px;
                    background-color: #F9A93130;
                    border:1px solid #FFC876;
                    border-radius: 30px;
                }
            }
        }
    }
`;

const Introduce = memo(() => {
  return (
    <IntroduceContainer>
        <div className='contentWrap'>
            <h1 className='title'>안녕하세요.&nbsp;<span className='point'>다재다능한</span>&nbsp;프론트엔드 개발자 김한솔입니다.</h1>
            <div className='hashTagWrap'>
                <ul className='hashTagInner'>
                    <li className='tagItem'>김한솔</li>
                    <li className='tagItem'>kimhs7858@gmail.com</li>
                    <li className='tagItem'>#근면성실</li>
                    <li className='tagItem'>#열정있는</li>
                    <li className='tagItem'>#소통_잘하는</li>
                </ul>
            </div>
        </div>
    </IntroduceContainer>
  );
});

export default Introduce;
