import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  produits: [],
};
const produits = {};
produits.slice = createSlice({
  name: 'produits',
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.produits = action.payload;
    },
    clearProducts: state => {
      state.produits = [];
    },
  },
});

export const {loadProducts, clearProducts} = produits.slice.actions;

export default produits.slice.reducer;
