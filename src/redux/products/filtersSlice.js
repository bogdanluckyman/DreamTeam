import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { title: '', category: 'Categories', filter: 'All' },
  reducers: {
    setFilters(state, action) {
      return (state = action.payload);
    },
  },
});

//сетфільтр будемо відправляти при ончендж в компоненті фільтрів
export const { setFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
