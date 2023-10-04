/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  products: [],
};

const currentUserSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      editProduct: (state, action) => {
        const { id, value } = action.payload;
        const product = state.products.find(product => product.id === id);
        if (product) { 
          product.quantity = product.quantity + value;
         } else {
          state.products.push(action.payload);
         }
      },
      clearCart: (state, action) => {
        state.products = [];
      }
    },

  });
  
  export const { editProduct, clearCart } = currentUserSlice.actions;
  
  export default currentUserSlice.reducer;