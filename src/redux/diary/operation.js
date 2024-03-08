import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://dream-team-backend-10w1.onrender.com';

// const safeToken = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const addCalories = createAsyncThunk(
  'diary/addCalories',
  async (value, thunkAPI) => {
    // const { date, amount, calories } = value;
    console.log(value);
    try {
      const response = await axios.post('/api/diary/product', {
        ...value,
        // date: date,
        // product: { productID: 9, amount: amount, calories: calories },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const removeCalories = createAsyncThunk(
  'diary/removeCalories',
  async (caloriesDetails, thunkAPI) => {
    const { id, date } = caloriesDetails;

    try {
      await axios.delete(`/api/diary/calories/${id}`, { data: { date } });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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


export const deleteExercise = createAsyncThunk(
  'diary/deleteExercise',
  async (exerciseId, thunkAPI) => {
    try {
      await axios.delete(`/api/diary/exercise/${exerciseId}`);
      return exerciseId; // Return the exerciseId to update the state accordingly
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteProduct = createAsyncThunk(
  'diary/deleteProduct',
  async (productDetails, thunkAPI) => {
    const { id, date } = productDetails;

    try {
      await axios.delete(`/api/diary/product/${id}`, { data: { date } });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);