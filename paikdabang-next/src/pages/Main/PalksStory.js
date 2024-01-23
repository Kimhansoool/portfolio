import React, {memo, useEffect} from 'react';
import Link from "next/link";

import styled from 'styled-components';

import MoreBtn from '../../components/MoreBtn';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/PaiksStorySlice';

const PalksStoryContainer = styled.div`
    display: flex;

    .storyWrap{
        width:50%;
        height:300px;

        .storyInner{
            background-size:cover;
            background-position:60%;
            cursor: pointer;

            display: block;
            width:100%;
            height:100%;

            &.brand{
                background-color: #253f85;
                background-size:300px;
                background-position:calc(100% - 60px) center;
                background-repeat:no-repeat;

                .textWrap{
                    margin-left:80px;
                    color:#fff;
                }
            }

            .textWrap{
                max-width: 1200px;
                /* padding:60px 130px; */
                margin-left:calc(100% - 600px);
                padding-top:60px;

                .title{
                    width:400px;
                    font-size:46px;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 900;
                }

                p{
                    margin-top:20px;
                    font-size:18px;
                    font-family: 'Noto Sans KR', sans-serif;
                    font-weight: 600;
                    margin-bottom:30px;
                }
            }
        }
    }

`;

const PalksStory = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.PaiksStorySlice);

    useEffect(() =>{
        dispatch(getList());
    }, []);
    
  return (
    <PalksStoryContainer>
        {data && data.map((v, i) =>{
            return(
                <section className='storyWrap' key={i}>
                    {(data.length - 1 === i) ? (
                        <div className='storyInner brand' style={{backgroundImage: `url(${v.img})`}}>
                            <div className='textWrap'>
                                <h1 className='title'>{v.title}</h1>
                                <p>{v.text}</p>
                                <MoreBtn href='#' />
                            </div>
                        </div>
                        ) : (
                        <div className='storyInner' style={{backgroundImage: `url(${v.img})`}}>
                            <div className='textWrap'>
                                <h1 className='title'>{v.title}</h1>
                                <p>{v.text}</p>
                                <MoreBtn href='#' />
                            </div>
                        </div>
                    )}  
                </section>
            );
        })}
        {/* <section className='storyWrap' style={{backgroundImage: "url(/img/main_sec1.jpg)"}}>
            <a href='#' className='storyInner'>
                <div className='textWrap'>
                    <h1 className='title'>PAIK'S COFFFEE STORY</h1>
                    <p>균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요.</p>
                    <a href='#' className='moreBtn'>
                        <img src='/img/icon/view_icon.png' alt='seeMore Button' />
                    </a>
                </div>
            </a>
        </section><section className='storyWrap' style={{backgroundImage: "url(/img/main_sec2.jpg)"}}>
            <a href='#' className='storyInner'>
                <div className='textWrap'>
                    <h1 className='title'>PAIK'S COFFFEE STORY</h1>
                    <p>균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요.</p>
                    <a href='#' className='moreBtn'>
                        <img src='/img/icon/view_icon.png' alt='seeMore Button' />
                    </a>
                </div>
            </a>
        </section> */}
    </PalksStoryContainer>
  );
});

export default PalksStory;
