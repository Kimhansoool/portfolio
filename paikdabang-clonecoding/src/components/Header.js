import React, {memo, useCallback} from 'react';
import styled from 'styled-components';
import dataset from '../dataset';

const HeaderContainer = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    /* background-color: #ff05; */
    padding:20px 0;
    position: static;
    width:100%;
    height:120px;

    .navInner{
      max-width:1200px;
      /* background-color: #f60; */
      margin:0 auto;

      .topMenu{
        display: flex;
        justify-content: right;
        align-items: center;
        
        li{
          margin-left:10px;
          font-size:14px;

          &:first-child::after{
            content: "|";
            margin-left:10px;
            color:#555;
          }

          a{
            color:#555;
          }
        }
      }

      .navWrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .navItem{
          display: flex;

          .link{
            padding:10px 40px;
            

            a{
              font-size:16px;
            }

            .navHoverWrap{
              background-color: #ffe600;
              width:100%;
              position: absolute;
              top:62px;
              left:0;
              z-index:999999999999;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              max-height:0;
              /* transition: max-height 300ms; */

              .navHoverItem{
                padding:40px;
              }
            }
          }
        }
      }
    }
`;

const Header = memo(() => {
  const {header} = dataset;
  // console.log(header);

  const onMenuItemOver = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;

    const index = Array.from(current.parentNode.children).indexOf(current);
    // console.log(index);

    const hover = current.querySelector('.navHoverWrap');
    // console.log(hover);
    hover.style.maxHeight = hover.scrollHeight + 'px';
    // console.log(hover.scrollHeight);
  }, []);

  const onMenuItemOut = useCallback((e) =>{
    e.preventDefault();
    const current = e.currentTarget;
    const hover = current.querySelector('.navHoverWrap');
    hover.style.maxHeight = '0px';
  }, []);

  return (
    <HeaderContainer>
      <div className='navInner'>
        <ul className='topMenu'>
          <li><a href='#'>더본코리아</a></li>
          <li><a href='#'><img src='/img/icon/top-facebook.jpg' alt='facebook-logo' /></a></li>
          <li><a href='#'><img src='/img/icon/top-instagram.jpg' alt='instagram-logo' /></a></li>
        </ul>
        <div className='navWrap'>
          <img src='/img/logo.png' alt='logoImg' className='logoImg' />
          <ul className='navItem'>
            {header.map((v, i) =>{
              return(
                <li key={v.id} className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                  <a href='#'>{v.title}</a>
                  <div className='navHoverWrap'>
                    {v.subMenu.length > 0 && (
                      <ul className='navHoverItem'>
                        {v.subMenu.map((j, k) =>{
                          return(
                            <li key={k}>
                              <a href='#'>{j.title}</a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
            {/* <li className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
              <a href='#'>빽다방</a>
              <div className='navHoverWrap'>
                <ul className='navHoverItem'>
                  <li><a href='#'>CEO인사말</a></li>
                  <li><a href='#'>빽다방 소개</a></li>
                  <li><a href='#'>멤버쉽/앱 소개</a></li>
                  <li><a href='#'>커피 이야기</a></li>
                  <li><a href='#'>교육 이야기</a></li>
                </ul>
              </div>
              </li>
            <li className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
              <a href='#'>메뉴</a>
              <div className='navHoverWrap'>
                <ul className='navHoverItem'>
                  <li><a href='#'>신메뉴</a></li>
                  <li><a href='#'>커피</a></li>
                  <li><a href='#'>음료</a></li>
                  <li><a href='#'>아이스크림/디저트</a></li>
                  <li><a href='#'>빽스치노</a></li>
                </ul>
              </div>
              </li>
            <li className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
              <a href='#'>소식</a>
              <div className='navHoverWrap'>
                <ul className='navHoverItem'>
                  <li><a href='#'>소식</a></li>
                  <li><a href='#'>이벤트</a></li>
                  <li><a href='#'>친절 우수매장</a></li>
                </ul>
              </div>
              </li>
            <li className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
              <a href='#'>커뮤니티</a>
              <div className='navHoverWrap'>
                <ul className='navHoverItem'>
                  <li><a href='#'>커피 클래스</a></li>
                </ul>
              </div>
              </li>
            <li className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
              <a href='#'>매장안내</a>
              <div className='navHoverWrap'>
                <ul className='navHoverItem'>
                  <li><a href='#'>매장찾기</a></li>
                </ul>
              </div>
              </li>
            <li className='link' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
              <a href='#'>창업안내</a>
              <div className='navHoverWrap'>
                <ul className='navHoverItem'>
                  <li><a href='#'>왜 빽다방인가요?</a></li>
                  <li><a href='#'>창업상담 신청</a></li>
                  <li><a href='#'>창업절차 및 조건</a></li>
                  <li><a href='#'>인테리어</a></li>
                </ul>
              </div>
            </li>
            <li className='link'>
              <a href='#'>고객의 소리</a>
            </li> */}
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
});

export default Header;
