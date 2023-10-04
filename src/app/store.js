import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice.js';
import cartReducer from './cartSlice.js';

export default configureStore({
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
    devTools: true
  });