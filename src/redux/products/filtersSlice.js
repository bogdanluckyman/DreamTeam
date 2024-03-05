import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { search: '', categories: 'Categories', productType: 'All' },
  reducers: {
    setFilters(state, action) {
      return (state = action.payload);
    },
  },
});

//сетфільтр будемо відправляти при ончендж в компоненті фільтрів
export const { setFilters } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
