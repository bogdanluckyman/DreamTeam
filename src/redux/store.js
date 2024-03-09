import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { diaryReducer } from './diary/slice';
// import { categoriesReducer } from './products/categoriesSlice';
import { categoriesReducer } from './exercises/categoriesSlice';
import { exercisesReducer } from './exercises/exerciseSlice';
import { productsReducer } from './products/productsSlice';
import { filtersReducer } from './products/filtersSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    products: productsReducer,
    categories: categoriesReducer,
    exercises: exercisesReducer,
    filters: filtersReducer,
    diary: diaryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
