import React, {memo, useCallback, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/CategorySlice';
import { titleList } from '@/slices/TitleContainerSlice';
import Link from 'next/link';

const MenuNewContainer = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;

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
                background-color: #fff;
                border: 1px solid #aaaaaa90;
                border-left:0;
                cursor: pointer;

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
`;

const MenuNew = memo(() => {

    const {data, loading, error} = useSelector((state) =>state.CategorySlice);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getList());
    }, []);

    const filterData = useMemo(() => data?.filter((v, i) => v.new), [data]);

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
        <MenuNewContainer>     
            <div className='titleContainer' style={{backgroundImage: "url(/img/menu_sec_newBg.jpg)"}}>
                <div className='titleInner'>
                    <h3 className='mainTitle'>신메뉴</h3>
                    <hr className='divider' />
                    <p className='mainSubTitle'>지금 바로 가까운 매장에서 빽다방 신메뉴를 만나 보실 수 있습니다.</p>
                </div>
                <ul className='mainTab'>
                    <li className='Tabinner on' onClick={onTabClick}><Link href='/menu/menu_new' className='titleLink'>신메뉴</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_coffee' className='titleLink'>커피</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_drink' className='titleLink'>음료</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_dessert' className='titleLink'>아이스크림/디저트</Link></li>
                    <li className='Tabinner' onClick={onTabClick}><Link href='/menu/menu_ccino' className='titleLink'>빽스치노</Link></li>
                </ul>
            </div> 
            {/* {data && data.map((v, i) =>{
                if (v.new) {
                    return (<p>{JSON.stringify(v)}</p>);
                }
            })} */}

            {JSON.stringify(filterData)}
        </MenuNewContainer>
    );
});

export default MenuNew;
