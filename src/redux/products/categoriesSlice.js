import { createSlice } from '@reduxjs/toolkit';
import { getProductCategories } from './operations';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.pending, console.log('first'))
      .addCase(getProductCategories.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.error = null;
        return (state = action.payload);
      })
      .addCase(getProductCategories.rejected, console.log('error'));
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
