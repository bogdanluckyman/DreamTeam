import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dream-team-backend-10w1.onrender.com';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logOut = createAsyncThunk(
  'api/users/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/api/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'users/update',
  async (params, thunkAPI) => {
    try {
      const res = await axios.patch('/api/users/update', params);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'users/avatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const res = await axios.patch('/api/users/avatars', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });

      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      console.log(file);
    }
  }
);
