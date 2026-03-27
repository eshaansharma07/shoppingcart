import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state) => state.cart.items;

export const selectCartSummary = createSelector([selectCartItems], (items) => {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal >= 15000 || subtotal === 0 ? 0 : 199;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return {
    itemCount,
    subtotal,
    shipping,
    tax,
    total
  };
});
