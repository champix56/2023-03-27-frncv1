import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const navigation = {};
navigation.slice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {},
});

export const {} = navigation.slice.actions;

export default navigation.slice.reducer;
