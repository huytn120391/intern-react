import { createSlice } from '@reduxjs/toolkit';

const intialState = {
  pages: 1,
  numPerpage: 16,
  price: [0, 1000],
  brand: [],
  rating: 0,
  isFreeShip: false,
  searchInput: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: intialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

const filterReducer = filterSlice.reducer;
export const { setSearchInput } = filterSlice.actions;
export default filterReducer;
