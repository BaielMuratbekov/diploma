import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkout = createAsyncThunk(
  "cart/checkout",
  async (order, thunkAPI) => {
    const response = await axios.post(
      "https://diploma-bb721-default-rtdb.firebaseio.com/orders.json",
      order
    );

    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: JSON.parse(localStorage.getItem('cartItemsInCart') ?? '{}'),
  },
  reducers: {
    add: (store, action) => {
      if (store.itemsInCart[action.payload]) {
        store.itemsInCart[action.payload]++;
      } else {
        store.itemsInCart[action.payload] = 1;
      }
    },
    remove: (store, action) => {
      delete store.itemsInCart[action.payload];
    },
    increment: (store, action) => {
      store.itemsInCart[action.payload]++;
    },
    decrement: (store, action) => {
      if (store.itemsInCart[action.payload] > 1) {
        store.itemsInCart[action.payload]--;
      } else {
        delete store.itemsInCart[action.payload];
      }
    },
    
  },
  extraReducers: {
    [checkout.fulfilled]: (state, action) => {
      console.log(action);
      state.itemsInCart = {};
    },
  },
});
export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
