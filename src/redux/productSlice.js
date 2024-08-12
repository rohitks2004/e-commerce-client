import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../constants";

const productSlice =  createSlice({
    name:'productSlice',
    initialState:{
        products : PRODUCTS
    },
    reducers:{
        search:(state,action)=>{
            if(action.payload){
                state.products = PRODUCTS.filter((product)=>product.title.toLowerCase().includes(action.payload))
            }
            else{
                state.products = PRODUCTS
            }
        }
    }
    
})

export const {search} = productSlice.actions;
export default productSlice.reducer;