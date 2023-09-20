import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => 'category',
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
