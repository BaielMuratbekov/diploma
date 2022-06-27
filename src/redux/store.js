import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
  },
});
store.subscribe(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().cart.itemsInCart)
  );
  console.log(store.getState().auth);
});
