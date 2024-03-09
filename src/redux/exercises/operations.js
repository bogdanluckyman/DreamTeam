import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExercisesCategories = createAsyncThunk(
  '/exercises/filter',
  async (getfilter, thunkAPI) => {
    try {
      const { filter } = getfilter;

      const response = await axios.get(`/api/exercises/filter/${filter}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExercisesList = createAsyncThunk(
  '/exercises/exercises/fetchExercisesList',
  async (filters, thunkAPI) => {
    const { filterList } = filters;

    try {
      const response = await axios.get(
        `/api/exercises/${filterList.toLowerCase()}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExercises = createAsyncThunk(
  'exercises/addExercises',
  async (exercise, thunkAPI) => {
    try {
      const responce = await axios.post('/exercises', exercise);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
