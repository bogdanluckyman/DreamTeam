import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dream-team-backend-10w1.onrender.com';

export const addCalories = createAsyncThunk(
  'diary/addCalories',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('/api/diary/product', value);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDiaryList = createAsyncThunk(
  'diary/getDiaryList',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(`/diary/getDiary/${date}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDiaryProducts = createAsyncThunk(
  'diary/addDiaryProducts',
  async (productDetails, thunkAPI) => {
    try {
      await axios.post('/diary/addProducts', productDetails);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
  'diary/addExercises',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('/api/diary/exercise', value);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteExercise = createAsyncThunk(
  'diary/deleteExercise',
  async (exerciseId, thunkAPI) => {
    try {
      await axios.delete(`/api/diary/exercise/${exerciseId}`);
      return exerciseId;
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
