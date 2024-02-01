import React, {memo, useEffect, useCallback} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import mq from '@/styles/MediaQuery';
import NewsHeader from '@/components/NewsHeader';

// 리덕스 관련 모듈
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/NewsSlice';

const NewsContentContainer = styled.div`
    margin-top:120px;

    ${mq.maxWidth('xl')`
        margin-top:70px;
    `}

    .contentWrap{
        max-width: 1200px;
        margin:80px auto;
        text-align:center;

        .titleContainer{
            max-width:1200px;
            margin-bottom:40px;
            padding:35px 50px;
            border-top:1px solid #0e347e;
            border-bottom:1px solid #0e347e;

            .titleInner{
                display:flex;
                align-items:center;
                justify-content:space-between;

                .title{
                    display:flex;

                    .group{
                        font-size:24px;
                        color:#919191;
                        font-weight:600;
                    }

                    h2{
                        font-size:24px;
                        color:#071F60;
                        font-weight:500;
                        margin-left:8px;
                    }
                }

                .info{
                    display:flex;
                    align-items:center;
                    color:#999999;
                    font-size:15px;

                    .divider{
                        margin:0 10px;
                        font-size:13px;
                    } 
                }
            }
        }

        .contentImg{
           width:70%; 
        }

        .buttonContainer{
            margin-top:60px;
            

            .home{
                cursor: pointer;
                font-size:16px;
                width:260px;
                height:50px;
                border:0px;
                background-color:#0e347e;
                

                .link{
                    box-sizing:border-box;
                    padding:13px 109px;
                    color:#fff;
                }
            }
            
        }
    }
    
`;

const NewsContent = memo(() => {
    const router = useRouter();
    const {newscontent} = router.query;
    console.log(newscontent);

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.NewsSlice);

    useEffect(() =>{
        if(newscontent){
            dispatch(getList({newscontent: newscontent}));
        }
    }, [newscontent]);

    return (
        <NewsContentContainer>
            <NewsHeader />
            <div className='contentWrap'>
                {data && data.map((v, i) =>{
                    return(
                    <>
                        <div className='titleContainer'>
                            <div className='titleInner'>
                                <div className='title'>
                                    <span className='group'>[{v.group}]</span>
                                    <h2>{v.title}</h2>
                                </div>
                                <div className='info'>
                                    <span>{v.regi_date}</span>
                                    <span className='divider'>|</span>
                                    <span>조회수 {v.view}</span>
                                </div>
                            </div>
                        </div>
                        <img className='contentImg' src={v.content_img} />
                    </>
                    );
                })}
                <div className='buttonContainer'>
                    <button className='home'><Link href='/news' className='link'>목록</Link></button>
                </div>
                
            </div>
        </NewsContentContainer>
    );
});

export default NewsContent;
