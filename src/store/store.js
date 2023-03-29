import {configureStore, combineReducers} from '@reduxjs/toolkit';
import produitsReducer, {fetchAll} from './produits.slice';
import navigationReducer from './navigation.slice';

export const store = configureStore({
  reducer: combineReducers({
    stock: produitsReducer,
    navigation: navigationReducer,
  }),
});
store.dispatch(fetchAll());
store.subscribe(() => {
  console.log('==========STORE=====================');
  console.log(store.getState());
  console.log('=========END STORE==================');
});

//state={produits:[]}
// state={stock:{produits:[]}}
