import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productSlice from "./productSlice";
import cartReducer from "./cartSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productSlice,
        cartItems: cartReducer,
    }
});