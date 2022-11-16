import {configureStore} from "@reduxjs/toolkit";
import cartItems from "./cartItems";
import location from "./location";

export const store = configureStore({
    reducer: {
        carts: cartItems,
        locUser: location,
    }
})