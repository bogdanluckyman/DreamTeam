import {
  createSlice
} from "@reduxjs/toolkit";
import {
  deleteExercise,
  deleteProduct,
  getDiaryList,
  addExercises,
  addDiaryProducts,
} from "./operation";

const initialState = {
  date: null,
  isLoading: false,
  error: null,
  productsAndExercisesError: null,
  burnedCalories: 0,
  consumedCalories: 0,
  doneExercisesTime: 0,
  products: [],
  exercises: [],
}

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
}

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
}

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
}


const diary = createSlice({
  name: 'diary',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDiaryList.pending, handlePending),
      builder.addCase(getDiaryList.fulfilled, (state, {
        payload
      }) => {
        state.isLoading = false;
        state.date = payload.date;
        state.products = payload.products || [];
        state.exercises = payload.products || [];
        state.burnedCalories = payload.burnedCalories || 0;
        state.consumedCalories = payload.consumedCalories || 0;
        state.doneExercisesTime = payload.doneExercisesTime || 0;
      });
    builder.addCase(getDiaryList.rejected, (state, {
      payload
    }) => {
      state.productsAndExercisesError = payload;
      state.burnedCalories = 0;
      state.consumedCalories = 0;
      state.doneExercisesTime = 0;
      state.isLoading = false;
      state.products = [];
      state.exercises = [];
    })

    builder.addCase(addDiaryProducts.pending, handlePending)
    builder.addCase(addDiaryProducts.fulfilled, handleFulfilled)
    builder.addCase(addDiaryProducts.rejected, handleRejected);

    builder.addCase(addExercises.pending, handlePending)
    builder.addCase(addExercises.fulfilled, handleFulfilled)
    builder.addCase(addExercises.rejected, handleRejected)

    builder.addCase(deleteProduct.pending, handlePending)
    builder.addCase(deleteProduct.fulfilled, (state, {payload}) => {
      handleFulfilled(state);
      const deletedProduct = state.products.find((product) => product.productId._id === payload)
      const newProductList = state.products.filter((product) => product.productId._id !== payload)
      state.products = newProductList;
      state.consumedCalories -= deletedProduct.calories;
    })
    builder.addCase(deleteProduct.rejected, handleRejected);

    builder.addCase(deleteExercise.pending, handlePending);
    builder.addCase(deleteExercise.fulfilled, (state, { payload }) => {
      handleFulfilled(state);
      const deletedExercise = state.exercises.find((exercise) => exercise.exerciseId === payload);
      const newExerciseList = state.exercises.filter((exercise) => exercise.exerciseId !== payload);
      state.exercises = newExerciseList;
      state.doneExercisesTime -= deletedExercise.time;
      state.burnedCalories -= deletedExercise.burnedCalories;
    });
    builder.addCase(deleteExercise.rejected, handleRejected);
  }
})

export const diaryReducer = diary.reducer;