import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => 'product',
    }),
  }),
});

export const { useGetProductQuery } = productApi;
