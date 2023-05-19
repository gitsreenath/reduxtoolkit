import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import StatusError from "../utlil/ErrorCodes";

const initialState = {
  data: [],
  status:StatusError.IDLE
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchproduct(state, action) {
    //   state.data = action.payload;
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status=StatusError.LOADING
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status=StatusError.IDLE
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status=StatusError.ERROR
    })
}
})

export const { fetchproduct } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts=createAsyncThunk('products/get',async()=>{
    const data=await fetch('https://fakestoreapi.com/products')
    const result=await data.json()
    return result
})

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getstate) {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const result = await response.json();
//     dispatch(fetchproduct(result));
//   };
// }
