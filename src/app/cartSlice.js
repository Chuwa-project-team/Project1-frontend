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
        const target_product = state.products.find(p => p.product.name === product.name);
        if (target_product) { 
          target_product.count = target_product.count + value;
         } else {
          state.products.push({product: product, count: value});
         }
      },
      removeCartProduct: (state, action) => {
        const { product } = action.payload;
        const target_product = state.products.find(p => p.product.name === product.name);                
        if (target_product) { 
          state.totalPrice = state.totalPrice - (product.price * target_product.count);
          state.products = state.products.filter(p => p.product.name !== product.name);
         }
      },
      clearCart: (state, action) => {
        state.products = [];
        state.totalPrice = 0;
      }
    },

  });
  
  export const { editCartProduct, clearCart, removeCartProduct } = cartSlice.actions;
  
  export default cartSlice.reducer;