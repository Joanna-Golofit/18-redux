import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from './counter'; //nazwa zalezy ode mnie
import authReducer from './auth'; //nazwa zalezy ode mnie, bo default export

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});


export default store;