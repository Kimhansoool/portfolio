import {createAsyncThunk } from '@reduxjs/toolkit'
import getDefaultSlice from '@/helper/ReduxHelper';
import axios from 'axios';

const API_URL = '/api/news';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("NewsSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    const myParams = {};

    if (payload?.newscontent) {
        myParams.id = payload.newscontent;
    }

    try {
        const response = await axios.get(API_URL,{
            params: myParams
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const NewsSlice = getDefaultSlice("MenuSlice", [getList]);

export default NewsSlice.reducer;