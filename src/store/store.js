import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/CartSlice";
import ProductSlice from "../features/ProductSlice";


 const store=configureStore({
    reducer:{
        cart:CartSlice,
        products:ProductSlice
    }
})

export default store