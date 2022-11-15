import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer/productReducer";
import userReducer from "./userReducer/userReducer";

export const store = configureStore({
    reducer:{
        userReducer:userReducer,
        productReducer,
    }
})