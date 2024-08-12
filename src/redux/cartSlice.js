import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartslice",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            // const product = state.cart.find((element)=>element.id === action.payload.id)
            // if(product){
            //     // state.cart = state.cart.map((element)=> element.id === action.payload.id ? {...element,quantity:element.quantity+1}:element) 
            // }
            // else{
                const product = {...action.payload}
                product.quantity = 1
                state.cart = [...state.cart, product]
            // } 
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter(element => element.id !== action.payload.id )
        }
        ,
        incrementQuantity:(state,action)=>{
           state.cart = state.cart.map((element)=>element.id === action.payload.id? {...element , quantity:element.quantity+1} : element )
        },
        decrementQuantity : (state,action)=>{
            state.cart = state.cart.map((element)=> element.id === action.payload.id? {...element,quantity:element.quantity-1}:element)
        }
    }
})
export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;