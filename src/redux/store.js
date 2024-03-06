import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './products/filtersSlice';

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
});
