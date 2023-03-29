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
    saveProduct: (state, action) => {
      const position = state.produits.findIndex(
        p => p.id === action.payload.id,
      );
      state.produits[position] = action.payload;
    },
  },
});

export const {loadProducts, clearProducts, saveProduct} =
  produits.slice.actions;

export default produits.slice.reducer;
