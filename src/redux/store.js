import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        counter : counterSlice,
        cartslice : cartSlice,
        productSlice : productSlice
    }
})

export default store