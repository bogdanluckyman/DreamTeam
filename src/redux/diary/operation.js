import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const getAllDiaryInformation = createAsyncThunk(
  '/diary/getAllDiaryInformation',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`/diary/${date}`);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(`${error.response.data.message}`, {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDiaryProduct = createAsyncThunk(
  '/diary/addDiaryProduct',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/diary/products`, data);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(
        `Sorry, something went wrong, please try again!`,
        {
          theme: 'dark',
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryProduct = createAsyncThunk(
  '/diary/deleteDiaryProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/diary/products/${productId}`);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(
        `Sorry, something went wrong, please try again!`,
        {
          theme: 'dark',
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDiaryExercise = createAsyncThunk(
  '/diary/addDiaryExercise',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/diary/exercises`, data);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(
        `Sorry, something went wrong, please try again!`,
        {
          theme: 'dark',
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryExercise = createAsyncThunk(
  '/diary/deleteDiaryExercise',
  async (exerciseId, thunkAPI) => {
    try {
      const response = await axios.delete(`/diary/exercises/${exerciseId}`);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(
        `Sorry, something went wrong, please try again!`,
        {
          theme: 'dark',
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
