import React, {memo, useEffect} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '@/slices/CategorySlice';

const PaiksMenu = styled.div`
    width:100%;
    background-color: #00f5;
    text-align: center;

    .titleContainer{
        display: flex;
        /* align-items: center; */
        justify-content: center;
        flex-wrap: wrap;
        height:500px;

        .mainTitle{
            width:100%;
            font-size:40px;
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
                <h3 className='mainTitle'>커피</h3>
                <p className=''>뉴 크롭 원두를 사용하여 더욱더 신선한 커피 메뉴를 만나보세요.</p>
            </div>
            {/* {data &&
                <p>{JSON.stringify(data)}</p>
            } */}
            
        </PaiksMenu>
    );
});

export default Category;
