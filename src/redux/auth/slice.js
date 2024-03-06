import { createSlice } from '@reduxjs/toolkit';
import { updateUserInfo } from './operation';
// import { updateUserInfo } from '../auth/operation';

import { register, logIn, logOut, refreshUser } from './operation';

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
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateUserInfo.pending, (state) => state)
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(updateUserInfo.rejected, (state) => {
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
