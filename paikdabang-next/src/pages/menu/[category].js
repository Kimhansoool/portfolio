import React, {memo, useEffect} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/CategorySlice';
import Link from 'next/link';

const PaiksMenu = styled.div`
    width:100%;
    height:100%;
    /* background-color: #00f5; */
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;

    .titleContainer{
        flex-wrap: wrap;
        height:500px;
        padding-top:150px;

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
            }
        }

        .mainTab{
            margin:0 auto;
            width:900px;
            display: flex;
            margin-top:100px;

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                width:100%;
                height:40px;
                /* background-color: #ffe600; */
                background-color: #fff;
                border: 1px solid #aaaaaa90;
                cursor: pointer;
                


                .titleLink{
                    cursor: pointer;
                    display: block;
                    padding:0 20px;
                }
            }
        }
    }

    .totalMenuContainer{
        width:1200px;
        height: 500px;
        /* background-color: #f0f5; */
        margin:0 auto;
        margin-top:100px;
        display: flex;

        .MenuWrap{
            width:300px;
            height:400px;
            border:1px solid #aaaaaa90;
            /* border-collapse: collapse; */
            border-right:0;

            &:last-child{
                border-right: 1px solid #aaaaaa90;
            }

            img{
                width:90%;
            }

            .MenuTitle{
                font-size:16px;
            }
        }
    }
`;

const Category = memo(() => {
    const router = useRouter();
    const {category} = router.query;
    console.log(category);

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) =>state.CategorySlice);

    useEffect(() =>{
        if (category) {
            dispatch(getList({category: category}));
        }
    }, [category]);

    return (
        <PaiksMenu>
            <div className='titleContainer' style={{backgroundImage: "url(/img/menu_sec_coffeeBg.jpg)"}}>
                <div className='titleInner'>
                    <h3 className='mainTitle'>커피</h3>
                    <hr className='divider' />
                    <p className='mainSubTitle'>뉴 크롭 원두를 사용하여 더욱더 신선한 커피 메뉴를 만나보세요.</p>
                </div>
                <ul className='mainTab'>
                    <li><Link href='/menu/menu_new' className='titleLink'>신메뉴</Link></li>
                    <li><Link href='/menu/menu_coffee' className='titleLink'>커피</Link></li>
                    <li><Link href='/menu/menu_drink' className='titleLink'>음료</Link></li>
                    <li><Link href='/menu/menu_dessert' className='titleLink'>아이스크림/디저트</Link></li>
                    <li><Link href='/menu/menu_ccino' className='titleLink'>빽스치노</Link></li>
                </ul>
            </div>
            <ul className='totalMenuContainer'>
                {data && data.map((v, i) =>{
                    return(
                        <li key={v.id} className='MenuWrap'>
                            <img src={v.img} />
                            <p className='MenuTitle'>{v.name_kor}</p>
                        </li>
                    );
                })}
            </ul>
            {/* <ul className='totalMenuContainer'>
                <li className='MenuWrap'>
                    <img src='/img/menu/coffee/menu_coffee01.png' />
                    <p className='MenuTitle'>더블에스프레소</p>
                </li>
                <li className='MenuWrap'>
                    <img src='/img/menu/coffee/menu_coffee02.png' />
                    <p className='MenuTitle'>아메리카노(HOT)</p>
                </li>
                <li className='MenuWrap'>
                    <img src='/img/menu/coffee/menu_coffee03.png' />
                    <p className='MenuTitle'>아메리카노(ICED)</p>
                </li>
                <li className='MenuWrap'>
                    <img src='/img/menu/coffee/menu_coffee04.png' />
                    <p className='MenuTitle'>원조커피(HOT)</p>
                </li>
            </ul> */}
            {/* {data &&
                <p>{JSON.stringify(data)}</p>
            } */}
            
        </PaiksMenu>
    );
});

export default Category;
