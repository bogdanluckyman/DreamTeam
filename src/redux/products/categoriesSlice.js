import { createSlice } from '@reduxjs/toolkit';
import { getProductCategories } from './operations';

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejecting = (state, action) => {
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
      .addCase(getProductCategories.pending, handlePending)
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getProductCategories.rejected, handleRejecting);
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
