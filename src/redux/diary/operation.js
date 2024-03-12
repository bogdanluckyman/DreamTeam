import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const getAllDiaryInformation = createAsyncThunk(
  '/diary/getAllDiaryInformation',
  async (_, thunkAPI) => {
    function getFormattedDate() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      return `${day}-${month}-${year}`;
    }

    const formattedDate = getFormattedDate();
    const day = formattedDate;
    try {
      const response = await axios.get(`api/diary/entry/${day}`);

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
      const response = await axios.post(`api/diary/product`, data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryProduct = createAsyncThunk(
  '/diary/deleteDiaryProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`api/diary/product/${productId}`);
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
      const response = await axios.post(`api/diary/exercise`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryExercise = createAsyncThunk(
  '/diary/deleteDiaryExercise',
  async (workoutId, thunkAPI) => {
    try {
      const response = await axios.delete(`api/diary/exercise/${workoutId}`);
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
