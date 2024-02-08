import React, {memo} from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
    background-color: #333333;
    color:#fff !important;
    width:100%;
    height: 100vh;

    .contentWrap{
        max-width:1200px;
        margin:0 auto;

        .contentInner{
            display: flex;
            flex-wrap: wrap;

            .item{
                width:590px;
                height:350px;
                margin-right:10px;
                margin-bottom:60px;
                position: relative;

                &:nth-child(2n){
                    margin-right:0;
                }

                    &.active{
                        .black{
                            display: block;
                        }
                    }

                    img{
                        width:100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .black{
                        position: absolute;
                        width:95%;
                        height:90%;
                        top:50%;
                        left:50%;
                        transform: translate(-50%, -50%);
                        background-color: #F9A93199;
                        display: none;
                        padding:40px;

                        h2{
                            color:#000;
                            font-size:28px;
                            font-weight: 600;
                        }

                        ul{
                            margin-top:30px;
                            color:#000;
                            
                            li{
                                font-size:20px;
                                margin-bottom:10px;

                                span{
                                    font-size:20px;
                                    font-weight: 600;

                                    &::before{
                                        content: "-";
                                        display: inline-block;
                                        margin-right:5px;
                                    }
                                }

                                &:last-child{
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    /* padding:20px 25px; */
                                    height: 60px;
                                    background-color: #333;
                                    margin-top:50px;
                                    border-radius: 50px;
                                    cursor: pointer;
                                    
                                    a{
                                        color:#fff;
                                        font-size:20px;
                                        padding:100px;
                                    }
                                }
                            }
                        }
                    }

                p{
                    margin-top:10px;
                    font-size:18px;
                }
            }
        }
    }
`;

const Portfolio = memo(() => {
    return (
        <PortfolioContainer>
            <div className='contentWrap'>
                <ul className='contentInner'>
                    <li className='item active'>
                        <div className='black'>
                            <h2>빽다방 클론코딩</h2>
                            <ul>
                            <li><span>사용 언어:</span> Next.js</li>
                                <li><span>작업 기간:</span> 2023.1.4 ~ 2.5</li>
                                <li><span>작업 기여도:</span> 100%</li>
                                <li><a href='#'>작업물 보러가기</a></li>
                            </ul>
                        </div>
                        <img src='/img/sampleImg2.jpg' />
                    <p>빽다방 클론코딩 [사용언어: Next.js]</p>
                    </li>
                    <li className='item active'>
                        <div className='black'>
                            <h2>빽다방 클론코딩</h2>
                            <ul>
                            <li><span>사용 언어:</span> Next.js</li>
                                <li><span>작업 기간:</span> 2023.1.4 ~ 2.5</li>
                                <li><span>작업 기여도:</span> 100%</li>
                                <li><a href='#'>작업물 보러가기</a></li>
                            </ul>
                        </div>
                        <img src='/img/sampleImg2.jpg' />
                    <p>빽다방 클론코딩 [사용언어: Next.js]</p>
                    </li>
                    <li className='item'>
                        <div className='black'>
                            <h2>빽다방 클론코딩</h2>
                            <ul>
                            <li><span>사용 언어:</span> Next.js</li>
                                <li><span>작업 기간:</span> 2023.1.4 ~ 2.5</li>
                                <li><span>작업 기여도:</span> 100%</li>
                                <li><a href='#'>작업물 보러가기</a></li>
                            </ul>
                        </div>
                        <img src='/img/sampleImg2.jpg' />
                    <p>빽다방 클론코딩 [사용언어: Next.js]</p>
                    </li>
                    <li className='item'>
                        <div className='black'>
                            <h2>빽다방 클론코딩</h2>
                            <ul>
                            <li><span>사용 언어:</span> Next.js</li>
                                <li><span>작업 기간:</span> 2023.1.4 ~ 2.5</li>
                                <li><span>작업 기여도:</span> 100%</li>
                                <li><a href='#'>작업물 보러가기</a></li>
                            </ul>
                        </div>
                        <img src='/img/sampleImg2.jpg' />
                    <p>빽다방 클론코딩 [사용언어: Next.js]</p>
                    </li>
                </ul>
            </div>
        </PortfolioContainer>
    );
});

export default Portfolio;
