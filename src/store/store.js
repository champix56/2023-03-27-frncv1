import {configureStore, combineReducers} from '@reduxjs/toolkit';
import produitsReducer from './produits.slice';

export const store = configureStore({
  reducer: combineReducers({stock: produitsReducer}),
});

store.subscribe(() => {
  console.log('==========STORE=====================');
  console.log(store.getState());
  console.log('=========END STORE==================');
});

//state={produits:[]}
// state={stock:{produits:[]}}