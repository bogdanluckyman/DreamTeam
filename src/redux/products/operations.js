// запити на без за інфо
//логіка відкриття модалки

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://.com';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/ендпоінт');
      return response.data;
    } catch (e) {
      console.log(thunkAPI.rejectWithValue(e.message));
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//запит за категоріями книг
export async function getProductCategories() {
  try {
    const response = await axios.get();
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const categoriesList = response.data;
    return categoriesList;
  } catch {}
  return;
}
