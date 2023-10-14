/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      editCartProduct: (state, action) => {
        const { product, value } = action.payload;
        state.totalPrice = state.totalPrice + (product.price * value);
        const old_product = state.products.find(p => p.product.name === product.name);
        if (old_product) { 
          old_product.count = old_product.count + value;
         } else {
          state.products.push({product: product, count: value});
         }
      },
      clearCart: (state, action) => {
        state.products = [];
        state.totalPrice = 0;
      }
    },

  });
  
  export const { editCartProduct, clearCart } = cartSlice.actions;
  
  export default cartSlice.reducer;