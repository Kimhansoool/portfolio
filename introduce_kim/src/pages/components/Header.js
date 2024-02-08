import React, {memo} from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    position: fixed;
    top:0;
    left:0;
    z-index: 99999999;
    background-color: #111111;
    width:100%;
    height:60px;

    .headerInner{
        max-width: 1200px;
        height:100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo{
            width:146px;
            color:#fff;
            font-weight:900;
            font-size:24px;

            .point{
                font-size:24px;
                color:#F9A931;
            }
        }

        .navContainer{
            width:267px;
            display: flex;

            .navItem{
                margin-left:22px;
               

                &:first-child{margin-left:0;}

                .link{
                    font-weight: 600;
                    font-size:18px;
                    color:#fff;

                    &.active{
                        color:#F9A931;
                    }
                }
            }
        }
    }
`;

const Header = memo(() => {
  return (
    <HeaderContainer>
        <nav className='headerInner'>
            <h3 className='logo'>KIMHANS<span className='point'>O</span>L</h3>
            <ul className='navContainer'>
                <li className='navItem'><a href='#' className='link active'>MAIN</a></li>
                <li className='navItem'><a href='#' className='link'>ABOUT</a></li>
                <li className='navItem'><a href='#' className='link'>WORK</a></li>
                <li className='navItem'><a href='#' className='link'>SNS</a></li>
            </ul>
        </nav>
    </HeaderContainer>
  );
});

export default Header;
