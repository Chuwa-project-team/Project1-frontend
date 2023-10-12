/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      editProduct: (state, action) => {
        const { product, value } = action.payload;
        const old_product = state.products.find(p => p.product.name === product.name);
        if (old_product) { 
          old_product.count = old_product.count + value;
         } else {
          state.products.push({product: product, count: value});
         }
      },
      clearCart: (state, action) => {
        state.products = [];
      }
    },

  });
  
  export const { editProduct, clearCart } = cartSlice.actions;
  
  export default cartSlice.reducer;