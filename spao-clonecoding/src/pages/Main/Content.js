import React, {memo, useCallback} from 'react';
import styled from 'styled-components';
import dataset from '../../dataset';
import {NavLink} from 'react-router-dom';

const ContentContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    /* background-color: #ff05; */
    width:100%;

    .mainTitle{
        margin-top:96px;
        font-size:42px;
        font-weight: 700;
        margin-bottom:60px;

        &.newProduct{
            margin-top:90px;
        }
    }

    .menuWrap{
        display: flex;
        justify-content: center;

        .link{
            position: relative;
            margin-right:40px;

            &.active{
                font-weight: 600;
                border-bottom:3px solid #000000;
                padding-bottom:6px;
                
                &::after{
                    content: "";
                    position: absolute;
                    right:-8px;
                    top:-6px;
                    width:8px;
                    height:8px;
                    background-color: #c41e20;
                    border-radius: 50%;
                }
            }

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
        /* background-color: #f645; */
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

                    .productInfo{
                        width:36px;
                        height:auto;
                        position: absolute;
                        bottom:20px;
                        right:20px;
                        display: none;

                    }

                    &:hover{

                        .productInfo{
                            display: block;
                            animation: move 0.3s;
                            cursor: pointer;
                        }
                        img{
                            opacity:0.8;
                        }  
                    }

                    @keyframes move{
                        0% {
                            bottom:5px;
                        } 100% {
                            bottom:20px;
                        }
                    }

                    &.weeklyBest{
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
                    }

                    

                    img{
                        width:100%;
                    }
                } 
                
                .description{
                    .productName{
                        display: flex;
                        justify-content: space-between;
                        margin-top:14px;

                        .wish{
                            cursor: pointer;
                            background-image:url("/img/icon/wish.png");
                            background-repeat: no-repeat;
                            width:20px;
                            height:20px;
                        }

                        &.active::after{
                            content: "";
                        }

                        .title{
                            display: block;
                            /* background-color: #00f; */
                            text-align: left;
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
                        margin-top:6px;
                        

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

    .banner{
        display: flex;
        width:100%;
        margin: 130px auto 120px;
    }
`;

const HoverMenu = styled.div`
    position: absolute;
    text-align: left;
    bottom:-160px;
    right:0;
    width:360px;
    /* height:160px; */
    background-color: #fff;
    /* padding:6px 20px; */
    overflow: auto;
    /* border:1px solid #eeeeee; */
    box-sizing: border-box;
    border:1px solid #eeeeee;
    padding:6px 20px;
    height: 0;
    opacity: 0;

    ul{ 
        box-sizing: border-box;
        height: 100%;
        overflow-y: auto;

        li{
            border-bottom: 1px solid #0003;
            padding:14px 0;
            cursor: pointer;
            font-size:13px;
        }
    }

    &.active {
        opacity: 1;
        height: 160px;
    }
`;

const Content = memo(() => {
    const {weeklyBest, newProduct} = dataset.content;

    const onInfoHover = useCallback((e) =>{
        e.preventDefault();
        const current = e.currentTarget;

        const currentHover = current.parentElement.querySelector('.HoverMenu');
        console.log(currentHover);

        currentHover.classList.toggle('active');
        
    },[]);

    // const onInfoOut = useCallback((e) =>{
    //     e.preventDefault();

    //     const current = e.currentTarget;
    //     const currentHover = current.parentElement.querySelector('.HoverMenu');
    //     currentHover.style.height = '0px';
    //     currentHover.style.opacity = 0;
    // }, []);

    const onWish = useCallback((e) =>{
        e.preventDefault();

        const current = e.currentTarget;

        const heart = current.parentElement.querySelector('.wish');
        console.log(heart);

        heart.classList.toggle('active');

        if(heart.classList.contains("active")){
            heart.style.backgroundImage = "url(/img/icon/wishON.png)"
        } else{
            heart.style.backgroundImage = "url(/img/icon/wish.png)"
        }
 
    }, []);

  return (
    <ContentContainer>
      <h1 className='mainTitle'>위클리 베스트</h1>
      <ul className='menuWrap'>
        <li className='link active'><NavLink to='/'>우먼</NavLink></li>
        <li className='link'><NavLink to='/'>맨</NavLink></li>
        <li className='link'><NavLink to='/'>키즈</NavLink></li>
        <li className='link'><NavLink to='/'>파자마</NavLink></li>
      </ul>
      <div className='itemWrap'>
        <ul className='itemInner'>
            {weeklyBest.map((v, i) =>{
                return(
                    <li key={v.id} className='item'>
                        <div className='imgWrap weeklyBest'>
                            <a href='#'><img src={v.img} className='productImg' alt='weeklyBest-img' /></a>
                            <img className='productInfo' onClick={onInfoHover} src='/img/icon/hamburger-menu.png' alt='hamburger-menu' />
                            <HoverMenu className='HoverMenu'>
                                <ul className='hoverItemWrap'>
                                    {v.hoverInfo.map((j, k) =>{
                                        return(
                                            <li key={k}>{j.text}</li>
                                        );
                                    })}
                                </ul>
                            </HoverMenu>
                       </div>
                        <div className='description'>
                            <div className='productName'>
                                <span><a href={v.url} className='title'>{v.title}</a></span>
                                <i className='wish' onClick={onWish}></i>
                            </div>
                            <div className='price'>
                                <span className='nowPrice'>{v.nowPrice}</span>
                                <span className='beforePrice'>{v.beforePrice}</span>
                                <span className='discountPercent'>{v.discountPercent}</span>
                            </div>
                            <div className='colorBox'>
                                {v.colorChip.map((j, k) => {
                                return (
                                    <span className='colorChip' key={k} style={{backgroundColor :`${j.hexCode}`}}></span>
                                );
                                })}
                            </div>
                            <div className='reviewBox'>
                                <span className='review'>리뷰{v.review}건</span>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
      </div>
      <h1 className='mainTitle newProduct'>신상품</h1>
      <div className='itemWrap'>
        <ul className='itemInner'>
        {newProduct.map((v, i) =>{
                return(
                    <li key={v.id} className='item'>
                        <div className='imgWrap newProduct'>
                            <a href='#'><img src={v.img} alt='newProduct-img' /></a>
                            <img className='productInfo' onClick={onInfoHover} src='/img/icon/hamburger-menu.png' alt='hamburger-menu' />
                            <HoverMenu className='HoverMenu'>
                                <ul>
                                    {v.hoverInfo.map((j, k) =>{
                                        return(
                                            <li key={k}>{j.text}</li>
                                        );
                                    })}
                                </ul>
                            </HoverMenu>
                       </div>
                        <div className='description'>
                            <div className='productName'>
                                <span><a href={v.url} className='title'>{v.title}</a></span>
                                <i className='wish' onClick={onWish}></i>
                            </div>
                            <div className='price'>
                                <span className='nowPrice'>{v.nowPrice}</span>
                                <span className='beforePrice'>{v.beforePrice}</span>
                                <span className='discountPercent'>{v.discountPercent}</span>
                            </div>
                            <div className='colorBox'>
                                {v.colorChip.map((j, k) => {
                                return (
                                    <span className='colorChip' key={k} style={{backgroundColor :`${j.hexCode}`}}></span>
                                );
                                })}
                            </div>
                            <div className='reviewBox'>
                                <span className='review'>리뷰{v.review}건</span>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
      </div>
      <div className='banner'>
        <a href='#'><img src='/img/banner01.webp' /></a>
        <a href='#'><img src='/img/banner02.webp' /></a>
      </div>
      {/* <div className='itemWrap'>
        <ul className='itemInner'>
          <li className='item'>
            <div className='imgWrap weeklyBest'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
            <div className='imgWrap weeklyBest'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
            <div className='imgWrap weeklyBest'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
            <div className='imgWrap weeklyBest'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
            <div className='imgWrap weeklyBest'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
            <div className='imgWrap weeklyBest'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
            <div className='imgWrap weeklyBest'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
            <div className='imgWrap weeklyBest'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
      <h1 className='mainTitle newProduct'>신상품</h1>
      <div className='itemWrap'>
        <ul className='itemInner'>
          <li className='item'>
            <div className='imgWrap'>
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
                <img src='/img/weeklyBest/weeklyBestImg1.jpg' />
                <img className='productInfo' src='/img/icon/hamburger-menu.png' />
            </div>
            <div className='description'>
                <div className='productName'>
                    <span><a href='#' className='title'>[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01</a></span>
                    <i className='wish'><img src='/img/icon/wish.png' /></i>
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
      <div className='banner'>
        <a href='#'><img src='/img/banner01.webp' /></a>
        <a href='#'><img src='/img/banner02.webp' /></a>
      </div> */}
    </ContentContainer>
  );
});

export default Content;
