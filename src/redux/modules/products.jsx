import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: '멋진 바지',
    price: 20000,
    options: [28, 30, 32],
    likes: 100
  },
  {
    id: 2,
    name: '멋진 셔츠',
    price: 10000,
    options: ['small', 'medium', 'large'],
    likes: 200
  },
  {
    id: 3,
    name: '멋진 신발',
    price: 30000,
    options: [230, 240, 250, 260, 270],
    likes: 300
  }
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    }
  }
});

export default productsSlice.reducer;
export const { addToCart } = productsSlice.actions;
