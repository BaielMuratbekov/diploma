import { createSlice } from "@reduxjs/toolkit";

function saveInStorage(itemsInCart) {
  localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: {},
  },
  reducers: {
    add: (store, action) => {
      if (store.itemsInCart[action.payload]) {
        store.itemsInCart[action.payload]++;
      } else {
        store.itemsInCart[action.payload] = 1;
      }
      saveInStorage(store.itemsInCart);
    },
    delete: (store, action) => {
      delete store.itemsInCart[action.payload];
      saveInStorage(store.itemsInCart);
    },
    increment: (store, action) => {
      store.itemsInCart[action.payload]++;
      saveInStorage(store.itemsInCart);
    },
    decrement: (store, action) => {
      if (store.itemsInCart[action.payload] > 1) {
        store.itemsInCart[action.payload]--;
      } else {
        delete store.itemsInCart[action.payload];
      }
      saveInStorage(store.itemsInCart);
    },
    restore: (store, action) => {
      store.itemsInCart = JSON.parse(localStorage.getItem("cartItems") ?? "{}");
    },
  },
});

export default cartSlice.reducer;
