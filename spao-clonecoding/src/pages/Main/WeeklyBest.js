import React, {memo} from 'react';
import styled from 'styled-components';

const WeeklyBestContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    background-color: #ff05;
    width:100%;

    .mainTitle{
        margin-top:96px;
        font-size:42px;
        font-weight: 700;
    }

    .menuWrap{
        margin-top:70px;
        display: flex;
        justify-content: center;

        .link{
            margin-right:40px;

            &:last-child{
                margin-right:0;
            }

            a{
                font-size:20px;
            }
        }
    }

    .itemWrap{
        box-sizing: border-box;
        background-color: #f645;
        margin: 0 auto;
        width:1600px;
        margin-top:50px;
        display: flex;

        .itemInner{
            display: flex;
            flex-wrap: wrap;
            margin:auto;
            justify-content: center;

            .item{
                width:385px;
                margin-right:20px; 
                margin-bottom:60px;
                /* background-color: #f645; */

                &:nth-child(4n){
                    margin-right:0;
                }



                .imgWrap{
                    position: relative;

                    &:hover{
                        img{opacity:0.8;}     
                    }

                    &::after{
                        content: "1";
                        position: absolute;
                        font-size:26px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color:#fff;
                        top:0;
                        left:0;
                        width:60px;
                        height:60px;
                        background-color: #e86434;
                    }

                    img{
                        width:100%;
                    }
                } 
                
                .description{
                    .productName{
                        display: flex;
                        justify-content: space-between;
                        margin-top:10px;

                        .title{
                            display: block;
                            /* background-color: #00f; */
                            height:auto;
                            font-size:17px;
                            width:310px;

                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            word-break: break-all;
                        }
                    }

                    .price{
                        text-align: left;
                        display: flex;
                        align-items: baseline;
                        

                        .nowPrice{
                            font-size:22px;
                            font-weight: 500;
                            margin-right:8px;
                        }

                        .beforePrice{
                            font-size:16px;
                            color:#aaaaaa;
                            text-decoration: line-through;
                            margin-right:8px;
                        }

                        .discountPercent{
                            font-size:18px;
                            color:#c41e20;
                        }
                    }

                    .colorBox{
                        /* background-color: #f0f5; */
                        margin-top:14px;
                        display: flex;

                        .colorChip{
                            display: block;
                            width:14px;
                            height:14px;
                            border:1px solid #00000020;
                            background-color: #fff;
                            margin-right:4px;
                        }
                    }

                    .reviewBox{
                        text-align: left;
                        margin-top:14px;
                        

                        .review{
                            font-size:14px;
                            color:#555;
                        }
                    }
                }
            }
        }

        
    }
`;

const WeeklyBest = memo(() => {
  return (
    <WeeklyBestContainer>
      <h1 className='mainTitle'>위클리 베스트</h1>
      <ul className='menuWrap'>
        <li className='link'><a href='#'>우먼</a></li>
        <li className='link'><a href='#'>맨</a></li>
        <li className='link'><a href='#'>키즈</a></li>
        <li className='link'><a href='#'>파자마</a></li>
      </ul>
      <div className='itemWrap'>
        <ul className='itemInner'>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/img1.jpg' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i><img src='/img/icon/wish.png' /></i>
                </div>
                <div className='price'>
                    <span className='nowPrice'>19,900</span>
                    <span className='beforePrice'>29,900</span>
                    <span className='discountPercent'>33%</span>
                </div>
                <div className='colorBox'>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                </div>
                <div className='reviewBox'>
                    <span className='review'>리뷰755건</span>
                </div>
            </div>
          </li>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/img1.jpg' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i><img src='/img/icon/wish.png' /></i>
                </div>
                <div className='price'>
                    <span className='nowPrice'>19,900</span>
                    <span className='beforePrice'>29,900</span>
                    <span className='discountPercent'>33%</span>
                </div>
                <div className='colorBox'>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                </div>
                <div className='reviewBox'>
                    <span className='review'>리뷰755건</span>
                </div>
            </div>
          </li>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/img1.jpg' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i><img src='/img/icon/wish.png' /></i>
                </div>
                <div className='price'>
                    <span className='nowPrice'>19,900</span>
                    <span className='beforePrice'>29,900</span>
                    <span className='discountPercent'>33%</span>
                </div>
                <div className='colorBox'>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                </div>
                <div className='reviewBox'>
                    <span className='review'>리뷰755건</span>
                </div>
            </div>
          </li>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/img1.jpg' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i><img src='/img/icon/wish.png' /></i>
                </div>
                <div className='price'>
                    <span className='nowPrice'>19,900</span>
                    <span className='beforePrice'>29,900</span>
                    <span className='discountPercent'>33%</span>
                </div>
                <div className='colorBox'>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                </div>
                <div className='reviewBox'>
                    <span className='review'>리뷰755건</span>
                </div>
            </div>
          </li>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/img1.jpg' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i><img src='/img/icon/wish.png' /></i>
                </div>
                <div className='price'>
                    <span className='nowPrice'>19,900</span>
                    <span className='beforePrice'>29,900</span>
                    <span className='discountPercent'>33%</span>
                </div>
                <div className='colorBox'>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                </div>
                <div className='reviewBox'>
                    <span className='review'>리뷰755건</span>
                </div>
            </div>
          </li>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/img1.jpg' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i><img src='/img/icon/wish.png' /></i>
                </div>
                <div className='price'>
                    <span className='nowPrice'>19,900</span>
                    <span className='beforePrice'>29,900</span>
                    <span className='discountPercent'>33%</span>
                </div>
                <div className='colorBox'>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                </div>
                <div className='reviewBox'>
                    <span className='review'>리뷰755건</span>
                </div>
            </div>
          </li>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/img1.jpg' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i><img src='/img/icon/wish.png' /></i>
                </div>
                <div className='price'>
                    <span className='nowPrice'>19,900</span>
                    <span className='beforePrice'>29,900</span>
                    <span className='discountPercent'>33%</span>
                </div>
                <div className='colorBox'>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                </div>
                <div className='reviewBox'>
                    <span className='review'>리뷰755건</span>
                </div>
            </div>
          </li>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/img1.jpg' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i><img src='/img/icon/wish.png' /></i>
                </div>
                <div className='price'>
                    <span className='nowPrice'>19,900</span>
                    <span className='beforePrice'>29,900</span>
                    <span className='discountPercent'>33%</span>
                </div>
                <div className='colorBox'>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                    <span className='colorChip'></span>
                </div>
                <div className='reviewBox'>
                    <span className='review'>리뷰755건</span>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </WeeklyBestContainer>
  );
});

export default WeeklyBest;
