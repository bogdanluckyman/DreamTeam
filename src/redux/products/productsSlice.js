import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';
import { handlePending, handleRejecting } from './categoriesSlice';

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.userSearchProducts;
      })
      .addCase(fetchProducts.rejected, handleRejecting);
  },
});

export const productsReducer = productsSlice.reducer;
