import { createSlice } from '@reduxjs/toolkit';
import { fetchExercisesCategories } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejecting = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExercisesCategories.pending, handlePending)
      .addCase(fetchExercisesCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchExercisesCategories.rejected, handleRejecting);
  },
});

export const categoriesReducer = categoriesSlice.reducer;

export const getCategories = (state) => state.categories.items;
export const getIsLoading = (state) => state.categories.isLoading;
export const getError = (state) => state.categories.error;
