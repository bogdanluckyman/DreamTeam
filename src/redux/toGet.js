import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://dream-team-backend-10w1.onrender.com/api';

// const safeToken = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const addCalories = createAsyncThunk(
  'diaries/addCalories',
  async (value, thunkAPI) => {
    const { name, number } = value;

    try {
      const response = await axios.post('/diaries', {
        name: name,
        number: number,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addExercieses = createAsyncThunk(
  'diaries/addExercieses',
  async (value, thunkAPI) => {
    const { name, number } = value;

    try {
      const response = await axios.post('/diaries', {
        name: name,
        number: number,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
///////////////////////////////////////////////////////////////////

import { createSlice } from '@reduxjs/toolkit';

export const caloriesInitialState = {
  productCalories: [{ value: 2 }],
  exerciesesResults: [],
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isLoading = true;
};

export const diarySlice = createSlice({
  name: 'diaries',
  initialState: caloriesInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(addCalories.pending, handlePending)
      .addCase(addCalories.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = null;
        state.productCalories.push(action.payload);
      })
      .addCase(addCalories.rejected, handleRejected)
      .addCase(addExercieses.pending, handlePending)
      .addCase(addExercieses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exerciesesResults.push(action.payload);
      })
      .addCase(addExercieses.rejected, handleRejected);
  },
});

export const diaryReducer = diarySlice.reducer;
