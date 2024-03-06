import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { diaryReducer } from './toGet';

const rootReducer = combineReducers({
  // diary: diaryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
