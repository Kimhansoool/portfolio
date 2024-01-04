import React, {memo, useCallback, useState} from 'react';
import styled from 'styled-components';
import dataset from '../dataset';

import * as colors from '../style/colors';

const HeaderContainer = styled.nav`
    position: sticky;
    top:40px;
    left:0;
    /* background-color: #065; */
    width:100%;
    height:90px;
    z-index: 99999999;
    display: flex;
    align-items: center;
    padding: 0 100px;
    justify-content: space-between;

    &:hover{
      background-color: #ffffff;

      .logoImg{
        filter:brightness(0)  invert(17%) sepia(61%) saturate(5015%) hue-rotate(348deg) brightness(82%) contrast(93%);
      }

      .iconWrap{
          a{
            img{
              filter: brightness(0);
            }
          }
        }

      .MenuWrap{
        .mainMenuWrap{
          .mainMenuItem{
            .link{
              color:#000;
            }
          }
        }
      }
    }
    .MenuWrap{
      display: flex;
      align-items: center;

      .mainMenuWrap{
        display: flex;
        margin-left:50px;

        .mainMenuItem{

          .link{
            font-size:16px;
            font-weight: 600;
            color:#fff;
            margin-right:40px;
          }

          .subMenuWrap{
            box-sizing: border-box;
            position: absolute;
            width:100%;
            top:90px;
            left:0;
            background-color: #fff;
            z-index:999999999999;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            max-height:0;
            transition: max-height 180ms ease-out;
            /* background-color: #00f; */

            .subMenuInner{
              max-width:100%;
              height:max-content;
              /* background-color: #f60; */
              box-sizing: border-box;
              padding:50px 280px 100px 280px;
              display: flex;

              .common{
                width:200px;

                .subMenuItem{
                  margin-right:130px;
                  margin-bottom:14px;
                }

                a{
                  font-size:14px;
                }
              }

              .each{
                border-left:1px solid #eeeeee;
                height:max-content;
                width:200px;

                .subMenuItem{
                  padding-left:40px;
                  margin-bottom:14px;
                }

                a{
                  font-size:14px;
                  color:#a1a1a1;
                }
              }

              .eachImg{
                display: flex;
                margin-left:280px;
                height: auto;

                img{
                  width:200px;
                  height:auto;
                  margin-left:20px;
                }
              }
            }
          }
        }
      }
    }

    .iconWrap{
      display: flex;
      align-items: center;

      a{
        margin-left:30px;
      }
    }
`;

const Header = memo(() => {

  const { header } = dataset;
  const [navItem, setNavItem] = useState('');

  // const onNavItemOver = useCallback((e) =>{
  //   const element = e.currentTarget;
  //   const index = Array.from(element.parentNode.children).indexOf(element);
  //   console.log(element, index);

  //   setNavItem(navItem);
  // }, [navItem]);


  const onMenuItemOver = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;

    const index = Array.from(current.parentNode.children).indexOf(current);
    console.log(index);

    const sub = current.querySelector('.subMenuWrap');
    console.log(sub);
    sub.style.maxHeight = sub.scrollHeight + 'px';
  }, []);

  const onMenuItemOut = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;
    const sub = current.querySelector('.subMenuWrap');
    sub.style.maxHeight = '0px';
  }, []);

  return (
    <HeaderContainer>
      <div className='MenuWrap'>
        <a href='#'><img className='logoImg' alt='logoImg' src='img/logo.png'/></a>
        <ul className='mainMenuWrap'>
            {header.map((v, i) =>{
              return(
                <li key={i} className='mainMenuItem' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                  <a href={v.url} className='link'>{v.title}</a>
                  <div className="subMenuWrap">
                    <div className='subMenuInner'>
                    {v.leftchildren.length > 0 && (
                      <ul className='common'>
                        {v.leftchildren.map((vv, ii) => {
                          return (
                            <li key={`${i}-${ii}`} className='subMenuItem'>
                              <a href={vv.url}>{vv.title}</a>
                            </li>
                          )
                        })}
                      </ul>
                    )} 

                    {v.children.length > 0 && (
                      <ul className='each'>
                        {v.children.map((vv, ii) => {
                          return (
                            <li key={`${i}-${ii}`} className='subMenuItem'>
                              <a href={vv.url}>{vv.title}</a>
                            </li>
                          )
                        })}
                      </ul>
                    )} 
                      {v.childBanners.length > 0 && (
                        <ul className='eachImg'>
                          {v.childBanners.map((vv, ii) => {
                            return (
                              <li key={`${i}-${ii}`}>
                                <a href={vv.url}><img src={vv.title} alt='banner' width={50}/></a>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
        <ul className='iconWrap'>
          <li><a href='#'><img alt='user' src='img/icon/top_user.png' /></a></li>
          <li><a href='#'><img alt='search' src='img/icon/top_search.png' /></a></li>
          <li><a href='#'><img alt='wish' src='img/icon/top_wish.png' /></a></li>
          <li><a href='#'><img alt='cart' src='img/icon/top_cart.png' /></a></li>
        </ul>
        {/* <li className='mainMenuItem'>
            <a href='#' className='link'>할인상품</a>
          </li>
          <li className='mainMenuItem'>
            <a href='#' className='link'>베스트</a>
          </li>
          <li className='mainMenuItem' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
            <a href='#' className='link'>우먼</a>
            <div className='subMenuWrap'>
              <div className='subMenuInner'>
                <ul className='common'>
                  <li className='subMenuItem'><a href='#'>신상품</a></li>
                  <li className='subMenuItem'><a href='#'>베스트</a></li>
                  <li className='subMenuItem'><a href='#'>전체보기</a></li>
                </ul>
                <ul className='each'>
                    <li className='subMenuItem'><a href='#'>아우터</a></li>
                    <li className='subMenuItem'><a href='#'>상의</a></li>
                    <li className='subMenuItem'><a href='#'>하의</a></li>
                    <li className='subMenuItem'><a href='#'>데님</a></li>
                    <li className='subMenuItem'><a href='#'>원피스</a></li>
                    <li className='subMenuItem'><a href='#'>악세서리</a></li>
                    <li className='subMenuItem'><a href='#'>이너/언더웨어</a></li>
                    <li className='subMenuItem'><a href='#'>홈웨어/잠옷</a></li>
                </ul>
                <div className='eachImg'>
                  <img src='/img/womanImg1.jpg' />
                  <img src='/img/womanImg2.jpg' />
                  <img src='/img/womanImg3.jpg' />
                </div>
              </div>
            </div>
          </li>
          <li className='mainMenuItem' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
            <a href='#' className='link'>맨</a>
            <div className='subMenuWrap'>
              <div className='subMenuInner'>
                <ul className='common'>
                  <li className='subMenuItem'><a href='#'>신상품</a></li>
                  <li className='subMenuItem'><a href='#'>베스트</a></li>
                  <li className='subMenuItem'><a href='#'>전체보기</a></li>
                </ul>
                <ul className='each'>
                    <li className='subMenuItem'><a href='#'>아우터</a></li>
                    <li className='subMenuItem'><a href='#'>상의</a></li>
                    <li className='subMenuItem'><a href='#'>하의</a></li>
                    <li className='subMenuItem'><a href='#'>데님</a></li>
                    <li className='subMenuItem'><a href='#'>악세서리</a></li>
                    <li className='subMenuItem'><a href='#'>이너/언더웨어</a></li>
                    <li className='subMenuItem'><a href='#'>홈웨어/잠옷</a></li>
                </ul>
                <div className='eachImg'>
                  <img src='/img/manImg1.jpg' />
                  <img src='/img/manImg2.jpg' />
                  <img src='/img/manImg3.jpg' />
                </div>
              </div>
            </div>
          </li>
          <li className='mainMenuItem' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
            <a href='#' className='link'>컬래버레이션</a>
            <div className='subMenuWrap'>
              <div className='subMenuInner'>
                <ul className='common'>
                  <li className='subMenuItem'><a href='#'>신상품</a></li>
                  <li className='subMenuItem'><a href='#'>베스트</a></li>
                  <li className='subMenuItem'><a href='#'>전체보기</a></li>
                </ul>
                <ul className='each'>
                    <li className='subMenuItem'><a href='#'>잠옷</a></li>
                    <li className='subMenuItem'><a href='#'>상의</a></li>
                    <li className='subMenuItem'><a href='#'>잡화</a></li>
                    <li className='subMenuItem'><a href='#'>팬시/뷰티</a></li>
                </ul>
                <div className='eachImg'>
                  <img src='/img/CollaborationImg1.jpg' />
                  <img src='/img/CollaborationImg2.jpg' />
                  <img src='/img/CollaborationImg3.jpg' />
                </div>
              </div>
            </div>
          </li>
          <li className='mainMenuItem' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
            <a href='#' className='link'>키즈</a>
            <div className='subMenuWrap'>
              <div className='subMenuInner'>
                <ul className='common'>
                  <li className='subMenuItem'><a href='#'>신상품</a></li>
                  <li className='subMenuItem'><a href='#'>베스트</a></li>
                  <li className='subMenuItem'><a href='#'>전체보기</a></li>
                </ul>
                <ul className='each'>
                    <li className='subMenuItem'><a href='#'>아우터</a></li>
                    <li className='subMenuItem'><a href='#'>상의</a></li>
                    <li className='subMenuItem'><a href='#'>하의</a></li>
                    <li className='subMenuItem'><a href='#'>원피스/스커트</a></li>
                    <li className='subMenuItem'><a href='#'>상하의세트</a></li>
                    <li className='subMenuItem'><a href='#'>홈웨어/잠옷</a></li>
                    <li className='subMenuItem'><a href='#'>악세서리</a></li>
                </ul>
                <div className='eachImg'>
                  <img src='/img/kidsImg1.jpg' />
                  <img src='/img/kidsImg2.jpg' />
                </div>
              </div>
            </div>
          </li>
          <li className='mainMenuItem' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
            <a href='#' className='link'>커뮤니티</a>
            <div className='subMenuWrap'>
              <div className='subMenuInner'>
                <ul className='common'>
                  <li className='subMenuItem'><a href='#'>런칭캘린더</a></li>
                  <li className='subMenuItem'><a href='#'>룩북</a></li>
                  <li className='subMenuItem'><a href='#'>스냅</a></li>
                  <li className='subMenuItem'><a href='#'>스파오TV</a></li>
                  <li className='subMenuItem'><a href='#'>위클리 코디</a></li>
                  <li className='subMenuItem'><a href='#'>리뷰</a></li>
                  <br />
                  <li className='subMenuItem'><a href='#'>이벤트</a></li>
                  <li className='subMenuItem'><a href='#'>채용정보</a></li>
                </ul>
                <ul className='each'>
                    <li className='subMenuItem'><a href='#'>출석체크</a></li>
                    <li className='subMenuItem'><a href='#'>실시간 리뷰</a></li>
                    <li className='subMenuItem'><a href='#'>베스트 리뷰어 발표</a></li>
                    <li className='subMenuItem'><a href='#'>진행 이벤트</a></li>
                    <li className='subMenuItem'><a href='#'>종료 이벤트</a></li>
                    <li className='subMenuItem'><a href='#'>당첨자 발표</a></li>
                </ul>
                <div className='eachImg'>
                  <img src='/img/communityImg1.jpg' />
                  <img src='/img/communityImg2.jpg' />
                  <img src='/img/communityImg3.jpg' />
                </div>
              </div>
            </div>
          </li>
          <li className='mainMenuItem'>
            <a href='#' className='link'>런칭 캘린더</a>
          </li>
          <li className='mainMenuItem'>
            <a href='#' className='link'>매거진</a>
          </li> */}
    </HeaderContainer>
  );
});

export default Header;
