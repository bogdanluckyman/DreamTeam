import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//import { useSelector } from 'react-redux';
//import { selectToken } from '../auth/selectors';

const BASEURL = 'https://dream-team-backend-10w1.onrender.com/api';

export function littleFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
//додає токен в запит, але не працює
//const setAuthHeader = (token) => {
//  axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZThjYmE3NDVlODFjNzdiYTMzMzEyZiIsImlhdCI6MTcwOTc1NTMwMywiZXhwIjoxNzA5ODM4MTAzfQ.T8nqMePFbHcINtrEt0K_ASKq2HsWL4T3AVI2yJlV9nU`;
//};
//const TOKEN =
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWExM2Y4ODdmNjgwNDFjNWVhODliOSIsImlhdCI6MTcwOTk3ODkwOSwiZXhwIjoxNzEwMDYxNzA5fQ.tSe9Yoz71t1blEQ90vdbDC8-K8IShK9AzRgx4sm-6RI';

//const TOKEN = useSelector(selectToken);

//запит за категоріями
export const getProductCategories = createAsyncThunk(
  'categories/getProductCategories',
  async (TOKEN, thunkAPI) => {
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
  async ({ selectedFilters, TOKEN }, thunkAPI) => {
    try {
      const response = await axios
        .create({
          baseURL: BASEURL,
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .get(
          `/products/filter?title=${
            selectedFilters.title
          }&category=${littleFirstLetter(
            selectedFilters.category
          )}&filter=${littleFirstLetter(selectedFilters.filter)}`
        );

      return response.data;
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e.message));
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
