import React, {memo, useCallback, useEffect} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import mq from '@/styles/MediaQuery';
import NewsHeader from '@/components/NewsHeader';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/NewsSlice';

const IndexContainer = styled.div`
    margin-top:120px;

    ${mq.maxWidth('xl')`
        margin-top:70px;
    `}

    .contentContainer{
        max-width:1200px;
        margin:60px auto;

        .contentWrap{
            width:100%;

            thead{
                border-top:2px solid #071F60;
                border-bottom:1px solid #c8c8c8;

                td{
                    font-size:16px;
                    text-align:center;
                    padding:18px 15px;
                    color:#071F60;
                    font-weight:500;
                }
            }

            tbody{
                tr{
                    border-bottom:1px solid #c8c8c8;

                    &:hover{
                        background-color:#071F60;

                        td{
                            color:#fff;

                            .conLink{
                                color:#fff;
                            }
                        }
                    }
                    
                    td{
                        padding:28px 30px; 
                        text-align:center;
                        color:#333333;

                        &:nth-child(3){
                            text-align:left;
                        }

                        .conLink{
                            color:#333333;
                        }

                    }
                }  
            }
        }
    }

    .navLinks{
        margin:60px auto;
        width:300px;
        height: 100%;
        text-align: center;

        .pageNumbering{
            display: flex;
            justify-content: center;
            align-items: center;

            .numItem{
                width:30px;
                height:30px;
                margin-left:10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size:20px;

                .link{
                    color:#c8c8c8;
                    padding:10px;
                    display: block;

                    &:hover{
                        color:#000;
                        font-weight: 600;
                        transition: all 0.2s ease-in;
                    }
                }
                    
                &:last-child{
                   border:1px solid #e5e5e5; 
                   line-height: 0.3;
                   font-size:10px;
                   margin-left:40px;

                   .link{
                        color:#000;
                    }
                }
            }
        }
    }
`;

const index = memo(() => {
    const {data, loading, error} = useSelector((state) => state.NewsSlice);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getList());
    }, []);

    // const onTabClick = useCallback((e) =>{
    //     const current = e.currentTarget;
    //     console.log(current);
    //     const TabLi = document.querySelectorAll('.Tabinner');

    //     TabLi.forEach((v, i) =>{
    //         v.classList.remove("on");
    //     });
    //     current.classList.add("on");
    // }, []);

    return (
        <IndexContainer>
            <NewsHeader />
            {/* <div className='titleContainer' style={{backgroundImage: "url(/img/news_sec_Bg.jpg)"}}>
                <div className='titleInner'>
                    <h3 className='mainTitle'>소식</h3>
                    <hr className='divider' />
                    <p className='mainSubTitle'>다양한 이벤트와 새로운 소식을 확인하세요.</p>
                </div>
                <ul className='mainTab'>
                    <li className='Tabinner on' onClick={onTabClick}><Link href='/news' className='titleLink'>전체보기</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/news' className='titleLink'>소식</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/news' className='titleLink'>이벤트</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/news' className='titleLink'>친절우수매장</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/news' className='titleLink'>찾아가는 빽다방</Link></li>
                </ul>
            </div> */}

            <div className='contentContainer'>
                <table className='contentWrap'>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>분류</td>
                            <td>제목</td>
                            <td>등록일</td>
                            <td>조회수</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((v, i) =>{
                            return(
                            <tr key={i}>
                                <td>{v.num}</td>
                                <td>{v.group}</td>
                                <td><Link href={`/news/${v.id}`} className='conLink'>{v.title}</Link></td>
                                <td>{v.regi_date}</td>
                                <td>{v.view}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='navLinks'>
                <ul className='pageNumbering'>
                    <li className='numItem'><Link href='#' className='link'>1</Link></li>
                    <li className='numItem'><Link href='#' className='link'>2</Link></li>
                    <li className='numItem'><Link href='#' className='link'>3</Link></li>
                    <li className='numItem'><Link href='#' className='link'>4</Link></li>
                    <li className='numItem'><Link href='#' className='link'>5</Link></li>
                    <li className='numItem'><Link href='#' className='link'>▶</Link></li>
                </ul>
            </div>
        </IndexContainer>
    );
});

export default index;
