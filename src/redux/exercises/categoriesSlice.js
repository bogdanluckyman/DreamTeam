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
  name: 'categoriesEx',
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

export const categoriesReducerEx = categoriesSlice.reducer;

export const getCategoriesEx = (state) => state.categoriesEx.items;
export const getIsLoading = (state) => state.categoriesEx.isLoading;
export const getError = (state) => state.categoriesEx.error;
