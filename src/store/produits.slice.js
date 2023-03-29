import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

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
  extraReducers: builder => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.produits = action.payload;
    });
    builder.addCase(fetchAll.rejected, state => {
      state.produits = [
        {
          name: 'error list',
          description: 'error list',
          prix: -1,
          stock: -1,
          image: '',
        },
      ];
    });
  },
});
export const fetchAll = createAsyncThunk('produits/fetchAll', async () => {
  const response = await fetch(`http://localhost:7956/products`);
  return await response.json();
});
export const {loadProducts, clearProducts, saveProduct} =
  produits.slice.actions;

export default produits.slice.reducer;
