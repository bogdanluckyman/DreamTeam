import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://dream-team-backend-10w1.onrender.com';

// const safeToken = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const addCalories = createAsyncThunk(
  'diary/addCalories',
  async (value, thunkAPI) => {
    const { date, amount, calories } = value;
    console.log(value);
    try {
      const response = await axios.post('/api/diary/product', {
        value,
        // date: date,
        // product: { productID: 9, amount: amount, calories: calories },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addExercises = createAsyncThunk(
  'diary/addExercieses',
  async (value, thunkAPI) => {
    const { date, time, calories } = value;

    try {
      const response = await axios.post('/api/diary/exercise', {
        date: date,
        exercises: { exerciseID: 9, time: time, calories: calories },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
