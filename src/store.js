import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { categoryApi } from './store/categoryService';
import { productApi } from './store/productService';
import filterReducer from './store/fitlerSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      categoryApi.middleware,
      productApi.middleware,
    ]),
});
