import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { title: '', category: '', filter: 'All' },
  reducers: {
    setFilters(state, action) {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
