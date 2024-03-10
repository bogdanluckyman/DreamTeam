import { createSlice } from '@reduxjs/toolkit';
import { addCalories, addExercises, removeCalories } from './operation';

// export const caloriesInitialState = {
//   productCalories: [{ value: 2 }],
//   exerciesesResults: [],
//   isLoading: false,
//   error: null,
// };

const handleRejected = (state, action) => {
  console.log('999999999');
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isLoading = true;
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState: {
    productCalories: [{ value: 2 }],
    exerciesesResults: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCalories.pending, handlePending)
      .addCase(addCalories.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = null;
        state.productCalories.push(action.payload);
      })
      .addCase(addCalories.rejected, handleRejected)
      .addCase(removeCalories.pending, handlePending)
      .addCase(removeCalories.fulfilled, (state, action) => {
        console.log(action);
        const removedCaloriesId = action.payload;
        state.productCalories = state.productCalories.filter(
          (calories) => calories.id !== removedCaloriesId
        );
      })
      .addCase(addExercises.pending, handlePending)

      .addCase(addExercises.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = null;
        state.exerciesesResults.push(action.payload);
      })
      .addCase(addExercises.rejected, handleRejected);
  },
});

export const diaryReducer = diarySlice.reducer;
