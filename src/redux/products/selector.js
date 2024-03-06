//import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = (state) => state.products.items;
export const selectFilter = (state) => state.filters;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

//export const selectVisibleProducts = createSelector(
//  [selectProducts, selectFilter],
//  (products, filter) => {
//    return products.filter((product) =>
//      product.name.toLowerCase().includes(filter.toLowerCase())
//    );
//  }
//);
