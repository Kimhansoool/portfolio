import React, {memo, useCallback} from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const IndexContainer = styled.div`
    margin-top:120px;

    .titleContainer{
        width:100%;
        height:500px;
        padding-top:150px;
        background-image: url("/img/store_sec_Bg.jpg");
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
    }
    
    .storeSearchForm{
        margin:60px auto;
        max-width:1200px;
        padding:30px 40px;
        /* background-color: #ff0; */
        border:1px solid #ddd;
        background-color: #fefefe;
        border-radius: 3px;
        display: flex;
        align-items: center;

        .regionSearch{
            width:40%;
            height:46px;
            display: flex;
            align-items: center;

            span{
                font-size:18px;
                margin-right:30px;
            }

            .regionAll, .regionDetails{
                border:1px solid #eee;
                padding:6px 12px;
                width:140px;
            }

            .regionAll{
                margin-right:4px;
            }

            .regionDetails{
                width:140px;
            }
        }

        .storeSearch{
            position: relative;
            /* background-color: #00f5; */
            width:60%;
            height:46px;
            display: flex;
            align-items: center;

            span{
                font-size:18px;
                margin-right:30px;
            }

            .searchInput{
                height:40px;
                width:78%;
                border:1px solid #eee;
            }

            .searchSubmitButton{
                width:24px;
                height:24px;
                background-image: url("/img/icon/search_icon.png");
                background-size: cover;
                border:0;
                background-color: #fff;
                text-indent: -9999999999px;
                position: absolute;
                right:6%;
                top:24%;
            }
        }
    }

    .contentContainer{
        max-width: 1200px;
        margin:0 auto;

        .total{
            margin:70px 0;
            font-size:20px;
            text-align: center;
        }

        .storeList{
            width:100%;

            .list{
                width:100%;

               .contentInner{
                display: flex;
                padding:28px 30px;

                    span{
                        text-align: center;
                        display: block;
                        width:15%;

                        &:nth-child(3){
                            width:50%;
                        }

                        &:nth-child(5){
                            width:5%;
                        }
                    }
                }

                &.listTitle{
                    .contentInner{
                        border-top:2px solid #071F60;
                        border-bottom:1px solid #071F60;  

                        span{
                            font-size:18px;
                            color:#071F60;
                            font-weight: 600;  
                        }
                    }
                }

                &.listContent{

                    &.active{
                        background-color:#071F60;

                        .contentInner{
                            span{
                                color:#fff;
                                font-weight:400;

                                &:nth-child(2){
                                    color:#fff;
                                }

                                &:nth-child(5){
                                    transition: all 0.2 ease-in-out;
                                    background-image: url('/img/icon/more-on.png');
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    text-indent: 999999999999999px;
                                } 
                            }
                        }
                        
                    }

                    .contentInner{
                        cursor: pointer;
                        border-bottom:1px solid #c8c8c8;

                        span{
                            color:#666;

                            &:nth-child(2){
                                color:#000;
                            }

                            &:nth-child(5){
                                background-image: url('/img/icon/more-off.png');
                                background-repeat: no-repeat;
                                background-position: center;
                                text-indent: 999999999999999px;
                            } 
                        }
                    }
                }

                .infoWrap{
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-in-out;

                    background-color: #f8f8f8;
                    display: flex;
                    align-items: center;
                    border-bottom:1px solid #c8c8c8;

                    .storeImg{
                        margin:230px 50px;
                        width:400px;

                        img{
                            width:100%;
                            height: auto;
                        }
                    }

                    .storeInfo{
                        margin-left:20px;

                        .infoItem{
                            margin-bottom:30px;

                            &:last-child{
                                margin-bottom: 0;
                            }

                            .infoTitle{
                                display: inline-block;
                                width:60px;
                                margin-right:60px;
                                color: #071F60;
                                font-weight: 600;
                            }

                            .infoText{
                                color:#666;
                            }
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
    const ContentOn = useCallback((e) =>{
        e.preventDefault();

        const clickList = document.querySelectorAll('.list');
        const current = e.currentTarget;
        // console.log(current);

        document.querySelectorAll('.infoWrap').forEach((v, i) =>{
            v.style.maxHeight = '0px';
        })
        current.classList.toggle('active');

        clickList.forEach((v, i) =>{
            if(v !== current){
                v.classList.remove('active');
            }
        });

        const parent = current.closest('.listContent');
        const infoWrap = parent.querySelector('.infoWrap');
        console.log(infoWrap);

        if(!current.classList.contains('active')){
            infoWrap.style.maxHeight = '0px';
        } else{
            infoWrap.style.maxHeight = infoWrap.scrollHeight + 'px';
            console.log(infoWrap.scrollHeight);
        }
    }, []);
    return (
        <IndexContainer>
            <div className='titleContainer'>
                <div className='titleInner'>
                    <h3 className='mainTitle'>매장찾기</h3>
                    <hr className='divider' />
                    <p className='mainSubTitle'>원하시는 지역의 매장을 검색해 보세요!</p>
                </div>
            </div>
            <div className='storeSearchForm'>
                <form className='regionSearch'>
                    <span>지역검색</span>
                    <select name='regionAll' className='regionAll'>
                        <option value='Aall'>전체</option>
                        <option value='01'>서울특별시</option>
                        <option value='10'>경기도</option>
                        <option value='20'>인천광역시</option>
                        <option value='30'>대전광역시</option>
                        <option value='40'>충청북도</option>
                        <option value='50'>충청남도</option>
                        <option value='60'>강원도</option>
                        <option value='70'>경상북도</option>
                        <option value='80'>경상남도</option>
                        <option value='90'>제주도</option>
                        <option value='100'>울산광역시</option>
                        <option value='110'>부산광역시</option>
                        <option value='120'>광주광역시</option>
                        <option value='130'>전라북도</option>
                        <option value='140'>전라남도</option>
                        <option value='150'>대구광역시</option>
                        <option value='160'>세종특별자치시</option>
                    </select>
                    <select name='regionDetails' className='regionDetails'>
                        <option value='Dall'>전체</option>
                        <option value='81'>사천시</option>
                        <option value='91'>제주시</option>
                        <option value='02'>강북구</option>
                        <option value='41'>청주시</option>
                        <option value='11'>수원시</option>
                        <option value='111'>연제구</option>
                    </select>
                </form>
                <form className='storeSearch'>
                    <span>매장명 검색</span>
                    <input type='text' className='searchInput' name='searchInput' />
                    <button className='searchSubmitButton' type='submit'>검색버튼</button>
                </form>
            </div>
            <div className='contentContainer'>
                <h2 className='total'>총 개의 매장이 있습니다.</h2>
                <ul className='storeList'>
                    <li className='list listTitle'>
                        <div className='contentInner'>
                            <span>지역</span>
                            <span>매장명</span>
                            <span>주소</span>
                            <span>전화번호</span>
                            <span></span>
                        </div>
                    </li>
                    <li className='list listContent' onClick={ContentOn}>
                        <div className='contentInner'>
                            <span>경상남도</span>
                            <span>삼천포점</span>
                            <span>경상남도 사천시 벌리동 258-10</span>
                            <span>055-833-0740</span>
                            <span>more</span>
                        </div>
                        <div className='infoWrap'>
                            <div className='storeImg'>
                                <img src='/img/store/gyeongsang/s01.jpg' />
                            </div>
                            <ul className='storeInfo'>
                                <li className='infoItem'>
                                    <span className='infoTitle'>위치</span>
                                    <span className='infoText'>경상남도 사천시 벌리동 258-10</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>영업시간</span>
                                    <span className='infoText'>09:00 ~ 22:00</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>주차</span>
                                    <span className='infoText'>불가</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>전화번호</span>
                                    <span className='infoText'>055-833-0740</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>휴일</span>
                                    <span className='infoText'>연중무휴</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>좌석</span>
                                    <span className='infoText'>테이블 8개 / 좌석 16석</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='list listContent' onClick={ContentOn}>
                        <div className='contentInner'>
                            <span>경상남도</span>
                            <span>삼천포점</span>
                            <span>경상남도 사천시 벌리동 258-10</span>
                            <span>055-833-0740</span>
                            <span>more</span>
                        </div>
                        <div className='infoWrap'>
                            <div className='storeImg'>
                                <img src='/img/store/gyeongsang/s01.jpg' />
                            </div>
                            <ul className='storeInfo'>
                                <li className='infoItem'>
                                    <span className='infoTitle'>위치</span>
                                    <span className='infoText'>경상남도 사천시 벌리동 258-10</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>영업시간</span>
                                    <span className='infoText'>09:00 ~ 22:00</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>주차</span>
                                    <span className='infoText'>불가</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>전화번호</span>
                                    <span className='infoText'>055-833-0740</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>휴일</span>
                                    <span className='infoText'>연중무휴</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>좌석</span>
                                    <span className='infoText'>테이블 8개 / 좌석 16석</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='list listContent' onClick={ContentOn}>
                        <div className='contentInner'>
                            <span>경상남도</span>
                            <span>삼천포점</span>
                            <span>경상남도 사천시 벌리동 258-10</span>
                            <span>055-833-0740</span>
                            <span>more</span>
                        </div>
                        <div className='infoWrap'>
                            <div className='storeImg'>
                                <img src='/img/store/gyeongsang/s01.jpg' />
                            </div>
                            <ul className='storeInfo'>
                                <li className='infoItem'>
                                    <span className='infoTitle'>위치</span>
                                    <span className='infoText'>경상남도 사천시 벌리동 258-10</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>영업시간</span>
                                    <span className='infoText'>09:00 ~ 22:00</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>주차</span>
                                    <span className='infoText'>불가</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>전화번호</span>
                                    <span className='infoText'>055-833-0740</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>휴일</span>
                                    <span className='infoText'>연중무휴</span>
                                </li>
                                <li className='infoItem'>
                                    <span className='infoTitle'>좌석</span>
                                    <span className='infoText'>테이블 8개 / 좌석 16석</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                {/* <table className='storeList'>
                    <thead>
                        <tr>
                            <td>지역</td>
                            <td>매장명</td>
                            <td>주소</td>
                            <td>전화번호</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='list' onClick={ContentOn}>
                            <td>경상남도</td>
                            <td>삼천포점</td>
                            <td>경상남도 사천시 벌리동 258-10</td>
                            <td>055-833-0740</td>
                        </tr>
                        <tr className='contentList'>
                            <td className='contentListOn' colSpan={4}>
                                <div className='contentInner'>
                                    <div className='storeImg'>
                                        <img src='/img/store/gyeongsang/s01.jpg' />
                                    </div>
                                    <ul className='storeInfo'>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>위치</span>
                                            <span className='infoText'>경상남도 사천시 벌리동 258-10</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>영업시간</span>
                                            <span className='infoText'>09:00 ~ 22:00</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>주차</span>
                                            <span className='infoText'>불가</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>전화번호</span>
                                            <span className='infoText'>055-833-0740</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>휴일</span>
                                            <span className='infoText'>연중무휴</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>좌석</span>
                                            <span className='infoText'>테이블 8개 / 좌석 16석</span>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr className='list' onClick={ContentOn}>
                            <td>경상남도</td>
                            <td>삼천포점</td>
                            <td>경상남도 사천시 벌리동 258-10</td>
                            <td>055-833-0740</td>
                        </tr>
                        <tr className='contentList'>
                            <td className='contentListOn' colSpan={4}>
                                <div className='contentInner'>
                                    <div className='storeImg'>
                                        <img src='/img/store/gyeongsang/s01.jpg' />
                                    </div>
                                    <ul className='storeInfo'>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>위치</span>
                                            <span className='infoText'>경상남도 사천시 벌리동 258-10</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>영업시간</span>
                                            <span className='infoText'>09:00 ~ 22:00</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>주차</span>
                                            <span className='infoText'>불가</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>전화번호</span>
                                            <span className='infoText'>055-833-0740</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>휴일</span>
                                            <span className='infoText'>연중무휴</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>좌석</span>
                                            <span className='infoText'>테이블 8개 / 좌석 16석</span>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr className='list' onClick={ContentOn}>
                            <td>경상남도</td>
                            <td>삼천포점</td>
                            <td>경상남도 사천시 벌리동 258-10</td>
                            <td>055-833-0740</td>
                        </tr>
                        <tr className='contentList'>
                            <td className='contentListOn' colSpan={4}>
                                <div className='contentInner'>
                                    <div className='storeImg'>
                                        <img src='/img/store/gyeongsang/s01.jpg' />
                                    </div>
                                    <ul className='storeInfo'>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>위치</span>
                                            <span className='infoText'>경상남도 사천시 벌리동 258-10</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>영업시간</span>
                                            <span className='infoText'>09:00 ~ 22:00</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>주차</span>
                                            <span className='infoText'>불가</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>전화번호</span>
                                            <span className='infoText'>055-833-0740</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>휴일</span>
                                            <span className='infoText'>연중무휴</span>
                                        </li>
                                        <li className='infoItem'>
                                            <span className='infoTitle'>좌석</span>
                                            <span className='infoText'>테이블 8개 / 좌석 16석</span>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table> */}

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
            </div>
        </IndexContainer>
    );
});

export default index;
