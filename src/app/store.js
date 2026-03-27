import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import { loadCartState, saveCartState } from "./persistence";

const preloadedState = loadCartState();

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  preloadedState,
  devTools: true
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});
