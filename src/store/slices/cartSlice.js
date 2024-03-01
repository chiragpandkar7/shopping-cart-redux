import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
    //   state.cartItems.push(action.payload);
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if(existingItemIndex !== -1) {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingItemIndex].quantity += 1;
          state.cartItems = updatedCartItems;
      } else {
          state.cartItems = [...state.cartItems, {...action.payload, quantity: 1}];
      }
    },
    removeItem: (state, action) => {
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
      state.cartItems = updatedCartItems;
      
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
