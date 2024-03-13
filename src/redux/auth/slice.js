import { createSlice } from '@reduxjs/toolkit';
import { updateAvatar, updateUserInfo } from './operation';
import { register, logIn, logOut, refreshUser } from './operation';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isUserParams: false,
};

const checkUserParams = (user) => {
  const defaultUserDate = {
    blood: 1,
    sex: 'male',
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    levelActivity: 1,
  };

  return (
    user.sex === defaultUserDate.sex &&
    user.blood === defaultUserDate.blood &&
    user.height === defaultUserDate.height &&
    user.currentWeight === defaultUserDate.currentWeight &&
    user.desiredWeight === defaultUserDate.desiredWeight &&
    user.levelActivity === defaultUserDate.levelActivity
  );
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // state.isUserParams = checkUserParams(action.payload.user);
      })
      .addCase(register.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logIn.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.bmr = action.payload.bmr;
        state.dailyActivity = action.payload.dailyActivity;

        state.isLoggedIn = true;
        state.isUserParams = checkUserParams(state.user);
      })
      .addCase(logIn.rejected, (state) => {
        state.isRefreshing = false;
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
        state.user = action.payload.user;
        state.bmr = action.payload.bmr;
        state.dailyActivity = action.payload.dailyActivity;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isUserParams = checkUserParams(state.user);
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateUserInfo.pending, (state) => state)
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.bmr = action.payload.bmr;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isUserParams = checkUserParams(state.user);
      })
      .addCase(updateUserInfo.rejected, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(updateAvatar.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.data.avatarURL;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
