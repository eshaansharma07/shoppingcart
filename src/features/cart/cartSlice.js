import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const existingItemIndex = (items, id) => items.findIndex((item) => item.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const index = existingItemIndex(state.items, item.id);

      if (index >= 0) {
        state.items[index].quantity += 1;
        return;
      }

      state.items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
        quantity: 1
      });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((cartItem) => cartItem.id === id);

      if (!item) {
        return;
      }

      if (quantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.id !== id);
        return;
      }

      item.quantity = quantity;
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
