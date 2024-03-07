//логіка відкриття модалки

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASEURL = 'https://dream-team-backend-10w1.onrender.com/api';
//додає токен в запит, але не працює
//const setAuthHeader = (token) => {
//  axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZThjYmE3NDVlODFjNzdiYTMzMzEyZiIsImlhdCI6MTcwOTc1NTMwMywiZXhwIjoxNzA5ODM4MTAzfQ.T8nqMePFbHcINtrEt0K_ASKq2HsWL4T3AVI2yJlV9nU`;
//};
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWEwZTZmODdmNjgwNDFjNWVhODkyNyIsImlhdCI6MTcwOTgzNzkzNSwiZXhwIjoxNzA5OTIwNzM1fQ.YDy7577-JQVNs3Dq-LFM8VHtvwewmBqKt-vB2Klm0r4';

//запит за категоріями
export const getProductCategories = createAsyncThunk(
  'categories/getProductCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios
        .create({
          baseURL: BASEURL,
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .get('/products/categories');

      //   if (response.status !== 200) {
      //    throw new Error(`Request failed with status: ${response.status}`);
      //  }
      return response.data;
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e.message));
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//запит за відфільтрованим масивом продуктів
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (selectedFilters, thunkAPI) => {
    try {
      const response = await axios
        .create({
          baseURL: BASEURL,
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .get(
          `/products/filter?title=${selectedFilters.title}&category=${selectedFilters.category}&filter=${selectedFilters.filter}`
        );

      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e.message));
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
