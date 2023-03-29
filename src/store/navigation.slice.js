import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  component: null,
};

const navigation = {};
navigation.slice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.component = action.payload;
    },
  },
});

export const {setPage} = navigation.slice.actions;

export default navigation.slice.reducer;
