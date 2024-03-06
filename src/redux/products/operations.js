//логіка відкриття модалки

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://dream-team-backend-10w1.onrender.com/api';
//додає токен в запит
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


//запит за категоріями
export const getProductCategories = createAsyncThunk(
  'filters/',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/products/categories');
      setAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTg5YjIxNmY4ZTA4YTk4MjZkNmM2MiIsImlhdCI6MTcwOTc0Mjg4MiwiZXhwIjoxNzA5ODI1NjgyfQ.zDKHtqQTCcUkhJvoo8oV6w1u5wiQEzJeHXi3WJPh5A0'
      );
      if (response.status !== 200) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.data;
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e.message));
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//запит за відфільтрованим масивом продуктів
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (selectedFilters, thunkAPI) => {
    try {
      const response = await axios.get(
        `/products/filter?title=${selectedFilters.title}&category=${selectedFilters.category}&filter=${selectedFilters.filter}`
      );
      setAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTg5YjIxNmY4ZTA4YTk4MjZkNmM2MiIsImlhdCI6MTcwOTc0Mjg4MiwiZXhwIjoxNzA5ODI1NjgyfQ.zDKHtqQTCcUkhJvoo8oV6w1u5wiQEzJeHXi3WJPh5A0'
      );
      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e.message));
      return thunkAPI.rejectWithValue(e.message);
    }

  }
);

