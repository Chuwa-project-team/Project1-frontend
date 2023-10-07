/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice.js';
import cartReducer from './cartSlice.js';

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('Dispatching action:', action.type);
  console.log('Action payload:', action.payload);
  return next(action);
};

export default configureStore({
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
    devTools: true
  });

