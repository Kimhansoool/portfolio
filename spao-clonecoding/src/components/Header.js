import React, {memo} from 'react';
import styled from 'styled-components';
import dataset from '../dataset';

import * as colors from '../style/colors';

const HeaderContainer = styled.div`
    margin-top: 40px;
    width:100%;
    height:80px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding:0 40px; */

    &:hover{
        background-color: #fff;
        border-bottom:1px solid #00000020;

        .navWrap{

          
          .logoImg{
            filter:brightness(0)  invert(17%) sepia(61%) saturate(5015%) hue-rotate(348deg) brightness(82%) contrast(93%);
          }

          li{
            &:first-child{
              a{
                color:${colors.MAINC} !important;
              }
            }

            a{
              color:#000 !important;
            }
          }
        }

        .iconWrap{
          filter: brightness(0);
        }
      }

    position: sticky;
    top:0;
    left:0;
    z-index: 9999999999;

    .navContainer{
      width:100%;
      display: flex;
      height:80px;
      margin:0 auto;
      position: relative;
      padding:0 40px;

      &:hover{
        .navHover{
          display: block;
        }
      }

      .navHover{
        position: absolute;
        background-color: #fff;
        width:100%;
        height:500px;
        top:80px;
        left:0;
        display: none;

        .navHoverInner{
          margin:60px 0;
          float: left;

          &.main{
            border-left:1px solid #0001;
          }

          .navHoverItemL{
            margin-left:100px;
            margin-right:80px;
            /* background-color: #ff0; */
            width:100px;
            box-sizing: border-box;
          }

          .navHoverItemR{
            /* background-color: #00f; */
            width:100px;
            margin-left:40px;
            box-sizing: border-box;
            
            a{
              color:#666;
            }

          }

          li{
            margin-bottom:16px;

            a{
              font-size:15px;
            }
          }
        }
      }

      .navInner{
        width:1600px;
        padding:0 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .navWrap{
          display: flex;
          align-items: center;

          .logoImg{
            width:120px;
            height:auto;
            margin-right:60px;
          }

          li{
            margin-left:20px;

            &:first-child{
              margin-left:0;

              a{
                color: ${colors.MAINC};
              }
            }

            a{
              font-size:16px;
              font-weight:600;
              color:#fff;
            }
          }
        }

        .iconWrap{
          ul{
            display: flex;
            align-items: center;

            li{
              margin-left:30px;

              &:first-child{
                margin-left:0;
              }
            }
          }
          
        }
      }
    }
`;

const Header = memo(() => {

  const { header } = dataset;

  // {header.map((v, i) =>{
  //   console.log(v.id);
  //   if(v.id === "03"){
  //     return(
  //       v.leftchildren.map((j, k) =>{
  //         return(
  //           <li key={k}>
  //             {console.log(j)}
  //             <a href={j.url}>{j.title}</a>
  //           </li>
  //         );
  //       })
  //     )
  //   }
  // })}

  return (
    <HeaderContainer>
      <nav className='navContainer'>
        <div className='navInner'>
          <div className='navWrap'>
          <a href='#'><img className='logoImg' alt='logoImg' src='img/logo.png'/></a>
              <ul className='navWrap'>
                {header.map((v, i) =>{
                  return(
                    <li key={v.id}>
                      <a href={v.url}>{v.title}</a>
                    </li>
                  );
                })}
              </ul> 
          </div>
          <div className='iconWrap'>
            <ul>
              <li><a href='#'><img alt='user' src='img/icon/top_user.png' /></a></li>
              <li><a href='#'><img alt='search' src='img/icon/top_search.png' /></a></li>
              <li><a href='#'><img alt='wish' src='img/icon/top_wish.png' /></a></li>
              <li><a href='#'><img alt='cart' src='img/icon/top_cart.png' /></a></li>
            </ul>
          </div>
        </div>
        <div className='navHover'>
          <ul className='navHoverInner'>
            {header.map((v, i) =>{
              if(v.id === "03"){
                return(
                  v.leftchildren.map((j, k) =>{
                    return(
                      <li key={k} className='navHoverItemL'>
                        <a href={j.url}>{j.title}</a>
                      </li>
                    );
                  })
                )
              }
            })}
          </ul>
          <ul className='navHoverInner main'>
            {header.map((v, i) =>{
              if(v.id === "03"){
                return(
                  v.children.map((j, k) =>{
                    return(
                      <li key={k} className='navHoverItemR'>
                        <a href={j.url}>{j.title}</a>
                      </li>
                    );
                  })
                )
              }
            })}
          </ul>
        </div>
      </nav>
    </HeaderContainer>
  );
});

export default Header;
