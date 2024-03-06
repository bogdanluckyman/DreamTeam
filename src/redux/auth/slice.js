import { createSlice } from '@reduxjs/toolkit';
import {
  updateUserInfo,

} from '../auth/operation';

const initialState = {
  user: {
    name: '',
    email: '',
    height: 165,
    currentWeight: 75,
    desiredWeight: 60,
    birthday: '2006-01-01',
    blood: 1,
    sex: 'male',
    levelActivity: 2,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(updateUserInfo.pending, (state) => state)
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(updateUserInfo.rejected, (state) => {
        state.isLoggedIn = true;
      })
      
    
});

export const authReducer = authSlice.reducer;