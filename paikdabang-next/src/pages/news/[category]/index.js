import React, {memo, useCallback, useEffect, useMemo} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

    .titleContainer{
            width:100%;
            height:500px;
            padding-top:150px;
            background-image: url("/img/commuity_sec_coffeeClassBg.jpg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            text-align: center;

            .titleInner{
                width:100%;
                height:150px;

                .mainTitle{
                    font-size:40px;
                    font-weight:600;
                    margin-bottom: 30px;
                }

                .divider{
                    width:50px;
                    border: 1px solid #000;
                }

                .mainSubTitle{
                    margin-top:30px;
                    font-size:20px;
                    line-height: 1.6;
                }
            }

            .mainTab{
                margin:0 auto;
                max-width:900px;
                display: flex;
                margin-top:100px;
                padding:0 20px;

                li{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width:100%;
                    height:40px;
                    background-color: #fff;
                    border: 1px solid #aaaaaa90;
                    border-left:0;
                    cursor: pointer;

                    ${mq.maxWidth('xl')`
                        font-size:14px;
                    `}

                    &:first-child{
                        border-left:1px solid #aaaaaa90;
                    }

                    &.on{
                        background-color: #ffe600;
                            
                        }
                    
                    .titleLink{
                        cursor: pointer;
                        display: block;
                        padding:0 20px;
                    }
                }
            }
        }

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
    const router = useRouter();
    const {category} = router.query;
    console.log(category);

    const {data, loading, error} = useSelector((state) => state.NewsSlice);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getList({category: category}));
    }, [category]);

    const onTabClick = useCallback((e) =>{
        const current = e.currentTarget;
        console.log(current);
        const TabLi = document.querySelectorAll('.Tabinner');

        TabLi.forEach((v, i) =>{
            v.classList.remove("on");
        });
        current.classList.add("on");
    }, []);


    return (
        <IndexContainer>
            <div className='titleContainer' style={{backgroundImage: "url(/img/news_sec_Bg.jpg)"}}>
                <div className='titleInner'>
                    <h3 className='mainTitle'>소식</h3>
                    <hr className='divider' />
                    <p className='mainSubTitle'>다양한 이벤트와 새로운 소식을 확인하세요.</p>
                </div>
                <ul className='mainTab'>
                    <li className='Tabinner on' onClick={onTabClick}><Link href='/news/all' className='titleLink'>전체보기</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/news/cate_news' className='titleLink'>소식</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/news/cate_event' className='titleLink'>이벤트</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/news/cate_kind' className='titleLink'>친절우수매장</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/news/cate_visiting' className='titleLink'>찾아가는 빽다방</Link></li>
                </ul>
            </div>


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
                    {data && Array.isArray(data) && data.map((v, i) =>{
                        return(
                        <tr key={i}>
                            <td>{v.num}</td>
                            <td>{v.group}</td>
                            <td><Link href={`/news/${category}/${v.id}`} className='conLink'>{v.title}</Link></td>
                            <td>{v.regi_date}</td>
                            <td>{v.view}</td>
                        </tr>
                        );
                    })}
                        {/* {(category === "all") ? data && data.map((v, i) =>{
                            return(
                            <tr key={i}>
                                <td>{v.num}</td>
                                <td>{v.group}</td>
                                <td><Link href={`/news/${category}/${v.id}`} className='conLink'>{v.title}</Link></td>
                                <td>{v.regi_date}</td>
                                <td>{v.view}</td>
                            </tr>
                            );
                        }) : (category === filterData) ? filterData.map((v, i) =>{
                            return(
                            <tr key={i}>
                                <td>{v.num}</td>
                                <td>{v.group}</td>
                                <td><Link href={`/news/${category}/${v.id}`} className='conLink'>{v.title}</Link></td>
                                <td>{v.regi_date}</td>
                                <td>{v.view}</td>
                            </tr>
                            );
                        })} */}
                        {/* filterData && filterData.map((v, i) =>{
                            return(
                            <tr key={i}>
                                <td>{v.num}</td>
                                <td>{v.group}</td>
                                <td><Link href={`/news/${category}/${v.id}`} className='conLink'>{v.title}</Link></td>
                                <td>{v.regi_date}</td>
                                <td>{v.view}</td>
                            </tr>
                            );
                        }) */}
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
