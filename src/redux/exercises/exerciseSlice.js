import { createSlice } from '@reduxjs/toolkit';
import { fetchExercisesList, addExercises } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejecting = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExercisesList.pending, handlePending)
      .addCase(fetchExercisesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchExercisesList.rejected, handleRejecting)

      .addCase(addExercises.pending, handlePending)
      .addCase(addExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addExercises.rejected, handleRejecting);
  },
});

export const exercisesReducer = exercisesSlice.reducer;

export const getExercises = (state) => state.exercises.items;
export const getIsLoading = (state) => state.exercises.isLoading;
export const getError = (state) => state.exercises.error;
